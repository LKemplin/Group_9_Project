import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtDecode from "jwt-decode";
import {
  faIcons,
  faList,
  faCirclePlus,
  faShuffle,
  faCircleXmark,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ isLoggedIn }) {
  const icons = <FontAwesomeIcon icon={faIcons} />;
  const list = <FontAwesomeIcon icon={faList} />;
  const circle = <FontAwesomeIcon icon={faCirclePlus} />;
  const shuffle = <FontAwesomeIcon icon={faShuffle} />;
  const xmark = <FontAwesomeIcon icon={faCircleXmark} />;
  const logout = <FontAwesomeIcon icon={faArrowRightToBracket} />;

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    if (userToken) {
      const user = jwtDecode(userToken);
      setUser(user);
      console.log("THIS IS USER:::", user);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout", {}, { withCredentials: true })
      .then((res) => {
        Cookies.remove("userToken");
        setUser(null);
        navigate("/login");
      })
      .catch((err) => console.log("Logout error", err));
  };

  return (
    <div className="d-flex justify-content-around navbar">
      <Link to="/" id="song-quotes">
        {icons} Song Quotes
      </Link>
      <Link to="/songquotes/add">
        <a href="/songquotes/add" className="fs-3">
          {circle} Add Quotes
        </a>
      </Link>
      <button onClick={handleLogout} className="btn">
        {logout} Logout
      </button>
    </div>
  );
}

export default Navbar;
