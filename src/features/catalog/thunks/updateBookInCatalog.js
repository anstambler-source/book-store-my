import {setError, updateBookByIsbn} from "../catalogSlice.js";
import {isValidBook} from "../../../entities/book/book.validators.js";
import {saveCatalogToStorage} from "../catalogStorage.js";

export function updateBookInCatalog(payload) {
    return (dispatch, getState) => {
        const originalIsbn = String(payload?.originalIsbn ?? "");
        if (!originalIsbn) {
            dispatch(setError("ISBN is required"));
            return;
        }
        const {items} = getState().catalog;
        const existing = items.find((b) => b.isbn === originalIsbn);
        if (!existing) {
            dispatch(setError("Book with ISBN not found"));
            return;
        }

        const next = {
            title: String(payload.title ?? "").trim(),
            author: String(payload.author ?? "").trim(),
            isbn: String(payload.isbn ?? "").trim(),
            price: Number(payload.price),
            flagOutOfStock: existing.flagOutOfStock,
        }

        const validation = isValidBook(next);
        if (!validation.valid) {
            dispatch(setError(validation.error));
            return;
        }
        const isIsbnChanged = next.isbn !== originalIsbn;
        if (isIsbnChanged) {
            const collision = items.some((b) => b.isbn === next.isbn);
            if (collision) {
                dispatch(setError("ISBN already exists in catalog"));
                return;
            }
        }

        dispatch(updateBookByIsbn({originalIsbn, next}));
        saveCatalogToStorage(getState().catalog.items)

    };
}