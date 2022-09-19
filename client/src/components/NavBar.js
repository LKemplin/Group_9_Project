import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="d-flex justify-content-around navbar">
      <Link to="/" id="song-quotes">
        <h1>Song Quotes</h1>
      </Link>
      <Link to="/songquotes/add">
        <button className="btn">Add Quotes</button>
      </Link>
      <button className="btn">Log In</button>
    </div>
  );
};

export default navbar;
