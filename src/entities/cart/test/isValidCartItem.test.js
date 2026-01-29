import {describe, expect, it} from "vitest";
import {isValidCartItem} from "../isValidCartItem.js";

describe('isValidCartItem', () => {
    it('should return true when item is valid', () => {
        const newItem = {isbn: "978978978978", quantity: 1};
        expect(isValidCartItem(newItem)).toBe(true);
    });
    it('should return false when item is invalid', () => {
        const newItem = 1;
        expect(isValidCartItem(newItem)).toBe(false);
        const newItemTest = null;
        expect(isValidCartItem(newItemTest)).toBe(false);
    });
    // VERY BAD TEST!!!
    //it('should return 4 if 2+2', () => {
    //     const res = 2+2;
    //     expect(res).toBe(4);
    // })
})