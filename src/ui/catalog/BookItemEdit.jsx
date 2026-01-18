import {useState} from "react";

// import {useDispatch} from "react-redux";

function BookItemEdit({book, onCancel}) {
    //  const dispatch = useDispatch();
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [isbn, setIsbn] = useState(book.isbn);
    const [price, setPrice] = useState(book.price);

    function handleSave() {
        //    dispatch(updateBook({title, author, price, isbn, flagOutOfStock: book.flagOutOfStock}));
    }
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
            <input value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default BookItemEdit;