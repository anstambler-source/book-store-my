import {describe, expect, it} from "vitest";
import {addItem, cartReducer, removeItem} from "../cartSlice.js";

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

    it('should return error if created cart item is not valid', () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem('   '));
        expect(state.cartItems).toEqual([]);
        expect(state.info).toBeNull();
        expect(state.error).toBe('Invalid cart item');
    })

    it('should return an error if the book being deleted is not found', () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, removeItem("1234"));
        expect(state.cartItems).toEqual([{isbn: "978978978978", quantity: 1}]);
        expect(state.info).toBeNull();
        expect(state.error).toBe('A book with this ISBN was not found');
    })

    it('should remove cart item if it exists', () => {
        let state = cartReducer(undefined, {type: "@@INIT"});
        state = cartReducer(state, addItem("978978978978"));
        state = cartReducer(state, removeItem("978978978978"));
        expect(state.cartItems).toEqual([]);
        expect(state.error).toBeNull();
        expect(state.info).toBe("Item removed from cart");
    })
})