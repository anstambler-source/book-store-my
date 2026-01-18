import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCatalog} from "../../features/catalog/catalogThunks.js";
import {selectCatalogInfo, selectCatalogItems} from "../../features/catalog/catalogSelectors.js";
import AddBookScreen from "./AddBookScreen.jsx";
import BookItem from "./BookItem.jsx";

function CatalogScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCatalog())
    }, [dispatch]);
    const items = useSelector(selectCatalogItems);
    const info = useSelector(selectCatalogInfo);
    return (
        <div>
            {items.map((book) => (<BookItem key={book.isbn} book={book}/>))}
            <p>{info}</p>
        <AddBookScreen/>
        </div>
    );
}

export default CatalogScreen;