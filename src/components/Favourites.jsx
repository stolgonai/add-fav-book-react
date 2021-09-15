import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookContext, { books } from "../context";
import "../styles.css";

export default function Favourites() {
  const { favs } = useContext(BookContext);
  return (
    <>
      <h5>This is your favourite choices </h5>
      <div className="favs">
        {favs.map((book, id) => {
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
    </>
  );
}
