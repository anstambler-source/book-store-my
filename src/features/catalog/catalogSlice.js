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
        }
        // TODO change price by isbn
    }
});
export const {setCatalog, setError, addBook, toggleOutOfStockByIsbn} = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;