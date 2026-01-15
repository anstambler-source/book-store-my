import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addBookToCatalog} from "../../features/catalog/catalogThunks.js";


function AddBookScreen() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState("");
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    function handleSave(){
        dispatch(addBookToCatalog({title, author, price, isbn}));
        setTitle('');
        setAuthor('');
        setIsbn('');
        setPrice('');
        setShowForm(false);
    };
    function handleCancel(){
        setTitle('');
        setAuthor('');
        setIsbn('');
        setPrice('');
        setShowForm(false);
    };
    if (!showForm) {
       return (
           <div>
               <button onClick={() => setShowForm(true)}>Add Book</button>
           </div>
       )
    }
    return (
        <div>
            <h2>Add Book</h2>
            <div>
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value )} />
            </div>
            <div>
                <label>Author:</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value )} />
            </div>
            <div>
                <label>ISBN:</label>
                <input value={isbn} onChange={(e) => setIsbn(e.target.value )} />
            </div>
            <div>
                <label>Price:</label>
                <input value={price} onChange={(e) => setPrice(e.target.value )} />
            </div>
            <button onClick={handleSave}>Save Book</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AddBookScreen;