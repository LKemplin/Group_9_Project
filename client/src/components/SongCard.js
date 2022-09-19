import React from "react";
import { Link } from "react-router-dom";

const SongCard = (props) => {
  const { songCard } = props;

  const displayStarRating = (rating) => {
    if (rating == 1) {
      return <span>&#9733;</span>;
    } else if (rating == 2) {
      return <span>&#9733; &#9733;</span>;
    } else if (rating == 3) {
      return <span>&#9733; &#9733; &#9733;</span>;
    } else if (rating == 4) {
      return <span>&#9733; &#9733; &#9733; &#9733;</span>;
    } else if (rating == 5) {
      return <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>;
    }
  };

  return (
    <div className="card card-main">
      <h3 className="card-title">Title: {songCard.title}</h3>
      <h4 className="card-subtitle">Artist: {songCard.artist}</h4>
      <div className="card-body">
        <p className="card-text">
          <ul className="list-unstyled">
            <li>
              Posted by: {songCard.postedBy} on{" "}
              {new Date(songCard.updatedAt).toLocaleDateString()}
            </li>
            <li>Rating: {displayStarRating(songCard.rating)}</li>
          </ul>
        </p>
      </div>
      <div className="card-footer" id="card-footer-dashboard">
        <Link to={`/songquotes/details/${songCard._id}`}>
          <button className="btn btn-outline-dark">Read Quotes</button>
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
