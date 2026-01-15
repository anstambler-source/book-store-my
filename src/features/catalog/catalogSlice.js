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
        }
        // TODO toggleFlag out of stock
        // TODO change price by isbn
    }
});
export const { setCatalog, setError, addBook } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;