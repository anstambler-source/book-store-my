

function isNonEmptyString(value){
    return typeof value === "string" && value.length > 0;
}

function isValidIsbn(isbn){
    return typeof isbn === "string" && isbn.length >= 10 && isbn.length <= 13;
}

function isValidPrice(price){
    return typeof price === 'number' && price > 0 && price <= 99.99;
}

/**
 *
 * @param {Book} book
 */
export function isValidBook(book){
    if(!isNonEmptyString(book.title)){
        return {valid: false, error: "Title is required"};
    }
    if(!isNonEmptyString(book.author)){
        return {valid: false, error: "Author is required"};
    }
    if(!isValidIsbn(book.isbn)){
        return {valid: false, error: "ISBN is invalid"};
    }
    if(!isValidPrice(book.price)){
        return {valid: false, error: "Price must be a number and greater than 0, or less than 99.99"};
    }
    return {valid: true, error: null};
}