import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCatalog: (state, action) => {
            state.items = action.payload;
        },

        // TODO addBook: (state, action) => {
        //
        // }
    }
});
export const { setCatalog } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;

// export const LOAD_CATALOG = "LOAD_CATALOG";
// export function loadcatalog(rawcatalog) {
//     return {
//         type: LOAD_CATALOG,
//         payload: rawcatalog,
//     }
// }