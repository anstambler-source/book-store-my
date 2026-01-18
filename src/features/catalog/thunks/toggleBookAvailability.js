import {setError, toggleOutOfStockByIsbn} from "../catalogSlice.js";
import {saveCatalogToStorage} from "../catalogStorage.js";

export function toggleBookAvailability(isbn) {
    return (dispatch, getState) => {
        const {items} = getState().catalog;
        const exists = items.find((book) => book.isbn === isbn);
        if (!exists) {
            dispatch(setError("Book with isbn not found"));
            return;
        }

        dispatch(toggleOutOfStockByIsbn(isbn));
        saveCatalogToStorage(getState().catalog.items);
    }
}