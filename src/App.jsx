import './App.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadCatalog} from "./features/catalog/catalogThunks.js";

function App() {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(loadCatalog())
},[dispatch]);

  return (
    <>
      <div className="App">
        <h1 className="App-header">Bookshop</h1>
        <p>Catalog is loading into Redux</p>
      </div>
    </>
  )
}

export default App
