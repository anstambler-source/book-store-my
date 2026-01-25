export function createCartItem({isbn, quantity = 1}) {
    const normilizedIsbn = String(isbn ?? "").trim();
    const normilizedQuantity = Number(quantity);
    return {
        isbn: normilizedIsbn,
        quantity: normilizedQuantity,
    }
}