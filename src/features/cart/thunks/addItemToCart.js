import {addItem, setError, setInfo} from "../cartSlice.js";
import {createCartItem} from "../../../entities/cart/cartItem.js";
import {isValidCartItem} from "../../../entities/cart/isValidCartItem.js";

export function addItemToCart(isbn) {
    return (dispatch, getState) => {
        if (!isbn) {
            dispatch(setError('ISBN is required'))
            return
        }
        const {cartItems} = getState().cart;
        const existingItem = cartItems.find((item) => item.isbn === isbn);
        if (existingItem) {
            existingItem.quantity += 1;
            dispatch(setInfo("Quantity increased"));
            return;
        }
        const newItem = createCartItem({isbn});
        if (!isValidCartItem(newItem)) {
            dispatch(setError("Invalid cart item"));
            return;
        }
        dispatch(addItem(newItem));
    }
}