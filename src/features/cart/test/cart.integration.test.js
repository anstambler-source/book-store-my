import {describe, expect, it} from "vitest";
import {
    selectCartError,
    selectCartInfo,
    selectCartState,
    selectCartTotalBooks,
    selectCartUniqueISBN
} from "../cartSelectors.js";
import {configureStore} from "@reduxjs/toolkit";
import {addItem, cartReducer, changeQuantity} from "../cartSlice.js";

describe("cart integration (store + slice + selectors)", () => {
    it("updates real store state and selectors read correct values", () => {
        const store = configureStore({
            reducer: {
                cart: cartReducer,
            }
        });
        expect(selectCartState(store.getState())).toEqual({
            cartItems: [],
            info: null,
            error: null,
        });

        store.dispatch(addItem("978978978978"));
        expect(selectCartTotalBooks(store.getState())).toEqual(1);
        store.dispatch(addItem("978978978978", 10));
        expect(selectCartTotalBooks(store.getState())).toEqual(2);
        store.dispatch(changeQuantity({isbn: "978978978978", newQuantity: 10}));
        expect(selectCartTotalBooks(store.getState())).toEqual(10);
        expect(selectCartError(store.getState())).toBeNull();
        expect(selectCartInfo(store.getState())).toEqual("quantity updated");
        store.dispatch(addItem("978978978888"));
        expect(selectCartUniqueISBN(store.getState())).toEqual(2)
    })

})