import {createSlice} from "@reduxjs/toolkit";
import {createCartItem} from "../../entities/cart/cartItem.js";
import {isValidCartItem} from "../../entities/cart/isValidCartItem.js";

const initialState = {
    cartItems: [],
    info: null,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const isbn = action.payload;
            // state.info = null;
            // state.error = null;
            if (!isbn) {
                state.error = 'ISBN is required';
                state.info = null
                return;
            }
            const existingItem = state.cartItems.find((item) => item.isbn === isbn);
            if (existingItem) {
                state.info = "Quantity increased";
                state.error = null;
                existingItem.quantity += 1;
                return;
            }

            const newItem = createCartItem({isbn});
            if (!isValidCartItem(newItem)) {
                state.error = "Invalid cart item";
                state.info = null
                return;
            }

            state.cartItems.push(newItem);
            state.info = "Item added to cart";
            state.error = null;

        }
    },
});
export const {addItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;