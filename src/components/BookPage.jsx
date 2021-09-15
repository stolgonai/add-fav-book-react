import React, { useState, useContext } from "react";
import { FaRegHeart, FaArrowLeft } from "react-icons/fa";
import BookContext from "../context";
import { useParams, Link } from "react-router-dom";


export default function BookPage() {
  const { id } = useParams();
  const { books, favs, changeFavs } = useContext(BookContext);
  const bookInfo = books.find((book) => book.id === id); // sprosit u Adyla

  function handleOnClick() {
    changeFavs([...favs, bookInfo]); //[...favs, ...obj]
  }
  console.log(favs, "this is favs");
  return (
    <div className="oneBook">
      <img
        src={`${bookInfo.img}`}
        alt="book Cover"
        key={id}
        className="bookImg"
      />
      <h3>{bookInfo.title}</h3>
      <p>{bookInfo.author}</p>
      <section className="bookDetail">
        <p className="upperRow">Gènre</p>
        <p className="upperRow"> Launched </p>
        <p className="upperRow">Size </p>
        <h4> {bookInfo.category} </h4>
        <h4>{bookInfo.published}</h4>
        <h4> {bookInfo.pages}</h4>
      </section>
      <p className="synopse">Synopse</p>
      <p className="synopseText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        quae odio exercitationem veritatis, cupiditate voluptas accusantium rem
        et vel eaque mollitia nobis neque, dolore dolorum quasi nesciunt. Ullam
        atque quisquam, aliquid a, aliquam recusandae labore quos vitae corrupti
        ratione quis adipisci perferendis nam dolorem autem quaerat quo nostrum
        repellendus quae!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        quae odio exercitationem veritatis, cupiditate voluptas accusantium rem
        et vel eaque mollitia nobis neque, dolore dolorum quasi nesciunt. Ullam
        atque quisquam, aliquid a, aliquam recusandae labore quos vitae corrupti
        ratione quis adipisci perferendis nam dolorem autem quaerat quo nostrum
        repellendus quae! <span> More </span>
      </p>
      <section className="bookFooter">
        <Link to="/">
          <FaArrowLeft className="returnIcon" />
        </Link>
        <div className="add" onClick={handleOnClick}>
          <p className="addText"> SAVE TO FAVOURITES </p>
          <FaRegHeart className="favIcon" />
        </div>
      </section>
    </div>
  );
}
