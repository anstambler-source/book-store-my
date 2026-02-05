//Base selector
export const selectCartState = (state) => state.cart;
//Direct selectors
export const selectCartInfo = (state) => selectCartState(state).info;
export const selectCartError = (state) => selectCartState(state).error;
export const selectCartItems = (state) => selectCartState(state).cartItems;
//Derived selectors
export const selectCartUniqueISBN = (state) => selectCartItems(state).length;
export const selectCartTotalBooks = (state) =>
    selectCartItems(state).reduce((sum, cartItem) => sum + cartItem.quantity, 0);