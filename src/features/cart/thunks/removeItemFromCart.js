import {removeItem, setError} from "../cartSlice.js";

export function removeItemFromCart(isbn) {
    return (dispatch, getState) => {
        if (!isbn) {
            dispatch(setError("ISBN is required"));
            return;
        }
        const {cartItems} = getState().cart;
        const existingItem = cartItems.find((item) => item.isbn === isbn);
        if (!existingItem) {
            dispatch(setError("Item not found in cart"));
            return;
        }
        dispatch(removeItem(isbn));
    }
}