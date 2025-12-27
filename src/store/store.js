import {configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from "../features/catalog/catalogSlice.js";

export const store = configureStore({
    reducer:{
        catalog: catalogReducer,
    }
})