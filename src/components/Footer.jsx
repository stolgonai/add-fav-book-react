import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="navigation">
      <Link to="/">
        <button className="exploreBtn">
          <span className="icon">
            <FaSearch />
          </span>
          EXPLORE
        </button>
      </Link>

      <Link to="/favs">
        <button className="favBtn">
          <span className="icon">
            <FaRegHeart />
          </span>
          FAVOURITE
        </button>
      </Link>
    </nav>
  );
}
