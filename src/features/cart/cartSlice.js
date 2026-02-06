import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    info: null,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
            state.info = null;
        },

        setInfo: (state, action) => {
            state.info = action.payload;
            state.error = null;
        },

        addItem: (state, action) => {
            state.cartItems.push(action.payload);
            state.info = "Item added to cart";
            state.error = null;
        },

        removeItem: (state, action) => {
            const isbn = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.isbn !== isbn);
            state.info = "Item removed from cart";
            state.error = null;
        },

        changeQuantity: (state, action) => {
            const {isbn, newQuantity} = action.payload;
            const victim = state.cartItems.find(item => item.isbn === isbn);
            victim.quantity = newQuantity;
            state.info = "Quantity updated";
            state.error = null;
        }
    },
});
export const {setInfo, setError, addItem, removeItem, changeQuantity} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;