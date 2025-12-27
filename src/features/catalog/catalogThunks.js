import {loadCatalogFromStorage, saveCatalogToStorage} from "./catalogStorage.js";
import {setCatalog} from "./catalogSlice.js";
import {initBooks} from "./catalogSeed.js";

export function loadCatalog(){
    return (dispatch) => {
        const storedData = loadCatalogFromStorage();
        if(Array.isArray(storedData) && storedData.length > 0) {
            console.log("From Storage", storedData)
            dispatch(setCatalog(storedData));
            return;
        }
        saveCatalogToStorage(initBooks);
        dispatch(setCatalog(initBooks));
        console.log("From JSON", initBooks);
    }
}