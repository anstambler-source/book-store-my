export function isValidCartItem(item) {
    if (!item || typeof item !== "object") {
        return false
    }
    const {isbn, quantity} = item;
    if (typeof isbn !== "string" || isbn.trim() === "") {
        return false
    }

    if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity <= 0) {
        return false
    }
    return true

}