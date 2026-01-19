import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateBookInCatalog} from "../../features/catalog/thunks/updateBookInCatalog.js";

function BookItemEdit({book, stopShowCompnent}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [isbn, setIsbn] = useState(book.isbn);
    const [price, setPrice] = useState(book.price);

    function handleSave() {
        dispatch(updateBookInCatalog({
            originalIsbn: book.isbn,
            title,
            author,
            price,
            isbn,
            flagOutOfStock: book.flagOutOfStock
        }));
        stopShowCompnent();
    }
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
            <input value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={stopShowCompnent}>Cancel</button>
        </div>
    )
}

export default BookItemEdit;