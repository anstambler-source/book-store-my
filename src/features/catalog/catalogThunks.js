import {loadCatalogFromStorage, saveCatalogToStorage} from "./catalogStorage.js";
import {setCatalog} from "./catalogSlice.js";
import {initBooks} from "./catalogSeed.js";
import {hydrateCatalog} from "./hydrateCatalog.js";

export function loadCatalog(){
    return (dispatch) => {
        const storedData = loadCatalogFromStorage();
        const hydratedBooksFromStoredData = hydrateCatalog(storedData);
        if(hydratedBooksFromStoredData.books.length > 0) {
            console.log("From Storage", hydratedBooksFromStoredData);
            saveCatalogToStorage(hydratedBooksFromStoredData.books);
            dispatch(setCatalog(hydratedBooksFromStoredData.books));
            return;
        }
        const hydratedBooksFromSeed = hydrateCatalog (initBooks);
        saveCatalogToStorage(hydratedBooksFromSeed.books);
        dispatch(setCatalog(hydratedBooksFromSeed.books));
        console.log("From JSON", hydratedBooksFromSeed.books);
    }
}