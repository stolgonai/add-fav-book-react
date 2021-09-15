import React, { useState, useContext } from "react";
import "../styles.css";
import { Switch, Route, Link, useParams, Prompt } from "react-router-dom";
import Favourites from "./Favourites";
import Footer from "./Footer";
import BookContext, { books } from "../context";

export default function MainPage() {
  const [name, setName] = useState("");

  // prompt rabotate ne tak kak hotelos by...
  // function myFunction() {
  //   const person = prompt("Please enter your name", "Guest");
  //   if (person) {
  //     setName(person);
  //   }
  // }

  // render() {
  return (
    <div className="main-page">
      {/* <button onclick={myFunction()}>What is your name? </button> */}

      <Switch>
        <Route exact path="/">
          <div className="homePage">
            <section className="greeting">
              <h1> Hi {name}, </h1>
              <p> Let's find something new... </p>
            </section>
            <BookSection to="/trending" title="Trending">
              {/* pocemutak */}
            </BookSection>
            <Route path="/books/:id">{/* <BookInfo /> */}</Route>
            <BookSection to="/new_releases" title="New release" />
          </div>
        </Route>
        <Route path="/favs">
          <Favourites />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function BookSection({ title, to, booksL = [], ...props }) {
  const { books } = useContext(BookContext);

  return (
    <section {...props}>
      {/* <Link to={to} className="trendingBtn"> */}
      <h3>{title}</h3>
      {/* </Link> */}
      <div className="posters">
        {books.map((book, id) => {
          return (
            <div key={book.id}>
              <Link to={`books/${book.id}`}>
                <img
                  src={`${book.img}`}
                  alt="book Cover"
                  key={id}
                  className="posterImg"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
