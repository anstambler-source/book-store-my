import {createBook} from "../../../entities/book/book.js";
import {isValidBook} from "../../../entities/book/book.validators.js";
import {addBook, setError} from "../catalogSlice.js";
import {saveCatalogToStorage} from "../catalogStorage.js";


export function addBookToCatalog(rawBook) {
    return (dispatch, getState) => {
        const book = createBook(rawBook);
        const validation = isValidBook(book);
        if (!validation.valid) {
            dispatch(setError(validation.error));
            return;
        }
        const {items} = getState().catalog;
        const exists = items.some((b) => b.isbn === book.isbn);
        if (exists) {
            dispatch(setError("ISBN already exists in catalog"));
            return;
        }
        dispatch(addBook(book));
        saveCatalogToStorage(getState().catalog.items);
    }
}