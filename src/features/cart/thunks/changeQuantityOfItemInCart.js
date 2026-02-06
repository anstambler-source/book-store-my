import {changeQuantity, setError, setInfo} from "../cartSlice.js";

export function changeQuantityOfItemInCart(payload) {
    return (dispatch, getState) => {
        const {isbn, newQuantity} = payload || {};
        if (!isbn) {
            dispatch(setError("ISBN is required"));
            return;
        }
        if (typeof newQuantity !== "number" || !Number.isInteger(newQuantity) || newQuantity < 0) {
            dispatch(setError("Invalid quantity"));
            return;
        }
        const {cartItems} = getState().cart;
        const victim = cartItems.find(item => item.isbn === isbn);
        if (!victim) {
            dispatch(setError("ISBN not found in cart"));
            return;
        }
        if (newQuantity === 0) {
            getState().cart.cartItems = cartItems.filter((item) => item.isbn !== isbn);
            dispatch(setInfo("Item removed from cart because new quantity = 0"));
            return;
        }
        dispatch(changeQuantity({isbn, newQuantity}));
    }
}