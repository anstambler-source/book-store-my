/**
 * @typedef {Object} Book
 * @property {string}title
 * @property {string}author
 * @property {string}isbn
 * @property {number}price
 */

/**
 * @param {Book} book
 */

export function createBook(book) {
    return {
        title: String(book.title ?? "").trim(),
        author: String(book.author ?? "").trim(),
        isbn: String(book.isbn ?? "").trim(),
        price: Number(book.price),
    };
}