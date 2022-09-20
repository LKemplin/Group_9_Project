import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import StarRating from "./StarRating";

const EditSongQuote = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [rating, setRating] = useState();
  const [quotes, setQuotes] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/music/${id}`)
      .then((results) => {
        console.log(results.data);
        setTitle(results.data.title);
        setArtist(results.data.artist);
        setAlbum(results.data.album);
        setPostedBy(results.data.postedBy);
        setRating(results.data.rating);
        setQuotes(results.data.quotes);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/music/update/${id}`, {
        title,
        artist,
        album,
        postedBy,
        rating,
        quotes,
      })
      .then((results) => {
        console.log(results);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error);
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-3 form-div">
        <form
          className="form p-3 border border-dark border-1 text-center song-form"
          onSubmit={updateHandler}
        >
          <div>
            <label className="form-label">Song Title:</label>
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Artist:</label>
            {errors.artist && (
              <p className="text-danger">{errors.artist.message}</p>
            )}
            <input
              type="text"
              value={artist}
              className="form-control"
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Album:</label>
            {errors.album && (
              <p className="text-danger">{errors.album.message}</p>
            )}
            <input
              type="text"
              value={album}
              className="form-control"
              onChange={(e) => setAlbum(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Posted By:</label>
            {errors.postedBy && (
              <p className="text-danger">{errors.postedBy.message}</p>
            )}
            <input
              type="text"
              value={postedBy}
              className="form-control"
              onChange={(e) => setPostedBy(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">
              How many stars would you give this song?
            </label>
            {errors.rating && (
              <p className="text-danger">{errors.rating.message}</p>
            )}
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div>
            <label className="form-label">Quote:</label>
            {errors.quotes && (
              <p className="text-danger">{errors.quotes.message}</p>
            )}
            <textarea
              value={quotes}
              className="form-control"
              cols="30"
              rows="10"
              onChange={(e) => setQuotes(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-info-outline-dark m-3 btn-submit">
              Add Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSongQuote;
