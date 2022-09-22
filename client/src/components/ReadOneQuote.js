import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const ReadOneQuote = (props) => {
  const { songCards, setSongCards, removeFromList } = props;
  const { id } = useParams();
  const [song, setSong] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/music/${id}`)
      .then((results) => {
        console.log(results.data);
        setSong(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/music/${id}`)
      .then((res) => {
        removeFromList(id);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card col-8">
        <h2 className="card-title">{song.title}</h2>
        <h3 className="card-subtitle">{song.artist}</h3>
        {song.album && (
          <h4 className="card-subtitle mt-2">Album: {song.album}</h4>
        )}
        <div className="card-body">
          <p>
            Posted by: {song.postedBy} on{" "}
            {new Date(song.createdAt).toLocaleDateString()}
          </p>
          <p>Rating: {song.rating}</p>
          <h5 className=" shadow-lg p-3 mb-5">
            <strong>
              Lyric Quote: <em className="text-primary">{song.quote}</em>
            </strong>
          </h5>
          <Link to={`/songquotes/edit/${id}`}>
            <button className="btn m-5">Edit</button>
          </Link>
          <Link to={`/songquotes/delete/${id}`}>
            <button className="btn m-5" onClick={() => deleteHandler(song._id)}>
              Delete
            </button>
          </Link>
        </div>

        <div className="card-footer">
          Last updated: {new Date(song.updatedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ReadOneQuote;
