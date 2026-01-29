import {describe, expect, it} from "vitest";
import {addItem, cartReducer, changeQuantity, removeItem} from "../cartSlice.js";

describe('cartSlice', () => {
    it('should return the initial state', () => {
        const state = cartReducer(undefined, {type: "@@INIT"});
        expect(state.cartItems).toEqual([]);
        expect(state.info).toBe(null);
        expect(state.error).toBeNull();
    })

    it("should return new cartItem with quantity = 1", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 1}]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("Item added to cart");
    })

    it("should increase quantity if cartItem already exists", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, addItem("978978978978"));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 2}]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("Quantity increased");
    })

    it("should set error if isbn is empty", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, addItem(""));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 1}]);
        expect(state.error).toBe("ISBN is required");
        expect(state.info).toBeNull();
    })

    it("should removes item from cart", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, removeItem("978978978978"));
        expect(state.cartItems).toEqual([]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("Item removed from cart");
    })

    it('should set error if item not existing in cart', () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, removeItem("978978978"));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 1}]);
        expect(state.error).toBe("Item not found in cart");
        expect(state.info).toBeNull();

    });

    it("should change quantity if action.payload is correct", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, changeQuantity({isbn: "978978978978", newQuantity: 5}));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 5}]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("quantity updated");
    })

    it("should removes item if newQuantity = 0", () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, changeQuantity({isbn: "978978978978", newQuantity: 0}));
        expect(state.cartItems).toEqual([]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("Item removed from cart because new quantity = 0");
    })
})