import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookContext, { books } from "../context";
import "../styles.css";

export default function Trending() {
  const { books } = useContext(BookContext);
  return (
    <div className="favs">
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
  );
}
