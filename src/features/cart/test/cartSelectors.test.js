import {describe, expect, it} from "vitest";
import {selectCartState, selectCartTotalBooks, selectCartUniqueISBN} from "../cartSelectors.js";

describe('cartSelectors', () => {
    it('selectCartState should return cart ', () => {
        const state = {
            cart: {
                cartItems: [],
                info: null,
                error: null,
            },
        };
        expect(selectCartState(state)).toEqual(state.cart)
    });

    it('selectCartUniqueISBN should return count of uniq ISBN', () => {
        const state = {
            cart: {
                cartItems: [
                    {isbn: 1, quantity: 1},
                    {isbn: 2, quantity: 3},
                    {isbn: 3, quantity: 1},
                ],
                info: null,
                error: null,
            }
        }
        expect(selectCartUniqueISBN(state)).toBe(3)
    });
    it('selectCartTotalBooks should return count of total books', () => {
        const state = {
            cart: {
                cartItems: [
                    {isbn: 1, quantity: 1},
                    {isbn: 2, quantity: 3},
                    {isbn: 3, quantity: 1},
                ],
                info: null,
                error: null,
            }
        }
        expect(selectCartTotalBooks(state)).toBe(5)
    })
})