import React, { useState, useContext } from "react";
import "./styles.css";
import { Switch, Route, useParams, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import BookPage from "./components/BookPage";
import BookContext, { books } from "./context";

const initialFavs = JSON.parse(localStorage.getItem('favs'));

export default function App() {
  const [favs, setFavs] = useState(initialFavs || []);
  function changeFavs(newFavs) {
    setFavs(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  }
  return (
    <div className="App">
      <BookContext.Provider value={{ books, favs, changeFavs }}>
        <Switch>
          <Route path="/books/:id" exact>
            <BookPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BookContext.Provider>
    </div>
  );
}


/*
App
  Main
    trending
      book
    favourites
      book
  Footer
*/
