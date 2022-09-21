import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIcons,
  faList,
  faCirclePlus,
  faShuffle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const icons = <FontAwesomeIcon icon={faIcons} />;
  const list = <FontAwesomeIcon icon={faList} />;
  const circle = <FontAwesomeIcon icon={faCirclePlus} />;
  const shuffle = <FontAwesomeIcon icon={faShuffle} />;
  const xmark = <FontAwesomeIcon icon={faCircleXmark} />;

  return (
    <div classNameName="container">
      <div className="" id="wrapper">
        {/* <!--App Name and Logo--> */}
        <div className="bg-white">
          <div
            className="
            sidebar-heading
            text-center
            py-4
            primary-text
            fs-4
            fw-bold
            text-uppercase
            my-2
          "
            id="name"
          >
            {icons} Musically
            {/* <i className="fa-solid fa-icons"></i> Musically */}
          </div>
        </div>
        {/* <!--Logo Ends--> */}

        {/* <!--Buttons and Logout--> */}
        <div className="d-flex" id="button-container">
          <div className="my-4">
            <Link
              to=""
              className="
              list-group-item list-group-item-action
              bg-transparent
              second-text
              fw-bold
            "
            >
              {/* <i className="fa-solid fa-list"></i> Genres */}
              {list} Genres
            </Link>
          </div>
          <div className="my-4">
            <Link
              to=""
              className="
              list-group-item list-group-item-action
              bg-transparent
              second-text
              fw-bold
            "
            >
              {/* <i className="fa-sharp fa-solid fa-circle-plus"></i> Add New Post */}
              {circle} Add New Post
            </Link>
          </div>
          <div className="my-4">
            <Link
              to=""
              className="
              list-group-item list-group-item-action
              bg-transparent
              second-text
              fw-bold
            "
            >
              {/* <i className="fa-solid fa-shuffle"></i> Random Song/Suggestions */}
              {shuffle} Random Song
            </Link>
          </div>
          <div className="my-4" id="test">
            <Link
              to=""
              className="
              list-group-item list-group-item-action
              bg-transparent
              second-text
              fw-bold
            "
            >
              {/* <i className="fa-solid fa-circle-xmark"></i> Logout */}
              {xmark} Logout
            </Link>
          </div>
        </div>
        {/* <!--Buttons End--> */}

        {/* <!--Blog Post Starts--> */}
        <div id="page-content-container" className="d-flex flex-wrap my-5">
          <div className="col-6 d-block mx-auto p-5" id="post-container">
            <h2 className="text-center" id="user-blog">
              User's Blog!
            </h2>
            <span className="d-flex my-4" id="song-desc">
              <p className="fs-3">Song Name</p>
              <p className="fs-3">Song Artist</p>
            </span>
            <p className="my-3">
              Brief Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id esse impedit error odit pariatur nihil ipsa,
              reprehenderit perspiciatis dolore debitis doloremque quia
              explicabo ipsam tenetur sequi quaerat numquam necessitatibus!
              Quae?
            </p>
            <Link to="#">View More</Link>
          </div>
          <div className="col-6 d-block mx-auto p-5" id="post-container">
            <h2 className="text-center" id="user-blog">
              User's Blog!
            </h2>
            <span className="d-flex my-4" id="song-desc">
              <p className="fs-3">Song Name</p>
              <p className="fs-3">Song Artist</p>
            </span>
            <p>
              Brief Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id esse impedit error odit pariatur nihil ipsa,
              reprehenderit perspiciatis dolore debitis doloremque quia
              explicabo ipsam tenetur sequi quaerat numquam necessitatibus!
              Quae? Test test test test
            </p>
            <Link to="">View More</Link>
          </div>
        </div>
        <span className="fs-3 my-3 d-flex" id="show">
          <Link to="">Show More Blogs</Link>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
