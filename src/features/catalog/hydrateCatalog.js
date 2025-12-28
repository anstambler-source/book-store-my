/**
 * @typedef {Object} RejectedItem
 * @property {number} index
 * @property {string} reason
 * @property {any} raw
 */

/**
 * @typedef {Object} HydrateResult
 * @property {Book[]} books
 * @property {RejectedItem[]} rejected
 */


import {createBook} from "../../entities/book/book.js";
import {isValidBook} from "../../entities/book/book.validators.js";

/**
 *
 * @param {any} rawCatalog
 * @returns {HydrateResult}
 */
export function hydrateCatalog(rawCatalog) {
    /** @type {RejectedItem[]} */
    const rejected = [];

    /** @type {Book[]} */
    const books = [];

    if (!Array.isArray(rawCatalog)) {
        rejected.push({
            index: -1,
            reason: "Catalog is not an array",
            raw: rawCatalog
        });
        return {books, rejected };
    }

    /** @type{Map<string, number>} */
    const seenIsbnToKeptIndex = new Map();
    rawCatalog.forEach((rawItem, index) => {
        const book = createBook(rawItem ?? {});
        const {valid, error} = isValidBook(book);
        console.log(valid, error, rawItem);
        if (!valid) {
            rejected.push(
                {
                    index,
                    reason: error || "Invalid book",
                    raw: rawItem
                });
            return;
        }

        const isbnKey = book.isbn;
        if (seenIsbnToKeptIndex.has(isbnKey)) {
            rejected.push(
                {
                    index,
                    reason: "Duplicated isbn",
                    raw: book
                })
            return;
        }
        seenIsbnToKeptIndex.set(isbnKey, index);
        books.push(book);
    });
    return {
        books,
        rejected
    };
}