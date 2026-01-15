import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCatalog} from "../../features/catalog/catalogThunks.js";
import {selectCatalogInfo, selectCatalogItems} from "../../features/catalog/catalogSelectors.js";
import AddBookScreen from "./AddBookScreen.jsx";

function CatalogScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCatalog())
    }, [dispatch]);
    const items = useSelector(selectCatalogItems);
    const info = useSelector(selectCatalogInfo);
    return (
        <div>
            <ul>
                {items.map((book) => (
                    <li key={book.isbn}>
                        {book.title} - {book.author} - ${book.price} - {book.isbn}
                    </li>
                ))}
            </ul>
            <p>{info}</p>
        <AddBookScreen/>
        </div>
    );
}

export default CatalogScreen;