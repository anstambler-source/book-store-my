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
    {/*Проект Книжный магазин
    Сценарий:
    1. Каталог - хранится в LocalStorage
     при начальной загрузке - грузится из хранилища, если хранилище пустое, то грузится из js -JSON (10 книг)
     1.1. Книга содержит title, author, isbn, price, flagOutOfStock
     1.2. В каталоге нужно предусмотреть возможность добавлять / снимать книги из продажи с сохранением в LocalStorage
     1.3. При добавлении книги проверки.
     1.3.1. title, author, isbn, price не пустые
     1.3.2. title, author - String
     1.3.3. isbn - уникальный, String (consist between 10 - 12 symbols).
     1.3.4. price - Number, 99.99
     1.4. Снять книгу с продажи / Вернуть книгу.
     1.4.1. isbn - ключ
     1.5. Обновлять price


     2. Корзина (Cart)
     Для формирования заказа из книг, присутствующих в каталоге и доступных к продаже
     2.1. Добавить из каталога книгу в корзину. Мин кол-во - 1.
     2.1.1. При добавлении книги с isbn из корзины мы увеличиваем количество
     2.2. Удалить книгу из корзины.
     2.3. Уменьшить количество. Если уменьшаем и = 0, то 2.2.
     2.4. Увеличение количества до 99.
     2.5. Очистить
     2.6. В результате - Общее кол-во книг по каждому isbn, price, totalUnIsbn, totalQty, totalPrice
     2.7. Пользователь может сделать заказ из корзины.
     2.7.1. Формируется заказ (см. 3)
     2.7.2. После формирования заказа корзина очищается.

     3. Заказ. (Order)
     3.1. Если все позиции доступны, то заказ отправляется (пока в LocalStorage).
     3.1.1. Недоступные позиции удаляются (с нотификацией)
     3.2. По результату 3.1 или 3.1.1 считаем заказ успешен
     3.3. Если заказ не отправляется - нотификация об ошибке.  */}





    </>
  )
}

export default App
