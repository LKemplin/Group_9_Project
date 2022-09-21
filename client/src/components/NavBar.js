import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIcons,
  faList,
  faCirclePlus,
  faShuffle,
  faCircleXmark,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  const icons = <FontAwesomeIcon icon={faIcons} />;
  const list = <FontAwesomeIcon icon={faList} />;
  const circle = <FontAwesomeIcon icon={faCirclePlus} />;
  const shuffle = <FontAwesomeIcon icon={faShuffle} />;
  const xmark = <FontAwesomeIcon icon={faCircleXmark} />;
  const logout = <FontAwesomeIcon icon={faArrowRightToBracket} />;

  return (
    <div className="d-flex justify-content-around navbar">
      <Link to="/" id="song-quotes">
        <h1 className="font-link">LyriQuote</h1>
      </Link>
      <Link to="/songquotes/add">
        <button className="btn">Add Lyric Quote</button>
        {icons} Song Quotes
      </Link>
      <Link to="/songquotes/add">
        <a href="/songquotes/add" className="fs-3">
          {circle} Add Quotes
        </a>
      </Link>
      <a href="/login" className="btn">
        {logout} Login
      </a>
    </div>
  );
};

export default navbar;
