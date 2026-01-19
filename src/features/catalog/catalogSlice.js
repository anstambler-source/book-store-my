import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[],
    info: null,
    error: null,
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCatalog: (state, action) => {
            state.items = action.payload;
            state.info = "Catalog loaded successfully";
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.info = null;
        },

        addBook: (state, action) => {
            state.items.push(action.payload);
            state.error = null;
            state.info = "Book added successfully";
        },

        toggleOutOfStockByIsbn: (state, action) => {
            const isbn = action.payload;
            const book = state.items.find((book) => book.isbn === isbn);
            if (!book) return;
            book.flagOutOfStock = !book.flagOutOfStock;
        },

        updateBookByIsbn: (state, action) => {
            const {originalIsbn, next} = action.payload || {};
            const index = state.items.findIndex((book) => book.isbn === originalIsbn);
            if (index === -1) {
                state.error = "Book with isbn not found";
                state.info = null;
                return;
            }
            const prev = state.items[index];
            state.items[index] = {
                ...prev,
                ...next,
                flagOutOfStock: typeof next?.flagOutOfStock === "boolean" ? next.flagOutOfStock : prev.flagOutOfStock,
            }
            state.error = null;
            state.info = "Book updated successfully";
        }

    }
});
export const {setCatalog, setError, addBook, toggleOutOfStockByIsbn, updateBookByIsbn} = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;