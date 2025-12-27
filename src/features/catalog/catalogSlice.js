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
        }
    }
});
export const { setCatalog } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;