import {useDispatch} from "react-redux";
import {toggleBookAvailability} from "../../features/catalog/thunks/toggleBookAvailability.js";
import {useState} from "react";
import BookItemEdit from "./BookItemEdit.jsx";

function BookItem({book}) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    function handleToggleSale() {
        dispatch(toggleBookAvailability(book.isbn));
    }

    if (isEditing) {
        return (
            <BookItemEdit book={book} onCancel={() => setIsEditing(false)}/>
        )
    }
    return (
        <div>
            <div>
                {book.title} - {book.author} - ${book.price} - {book.isbn} - Out of
                sale: {book.flagOutOfStock.toString()}
            </div>
            <button onClick={handleToggleSale}>{book.flagOutOfStock ? "Return to sale" : "Take off sale"}</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    );
}

export default BookItem;