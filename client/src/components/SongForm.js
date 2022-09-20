import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [rating, setRating] = useState();
  const [quote, setQuote] = useState();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/music/create", {
        title,
        artist,
        album,
        postedBy,
        rating,
        quote,
      })
      .then((results) => {
        console.log(results);
        navigate("/songquotes/dashboard");
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
          className="form p-3 border border-dark border-1 text-center song-form song-bg"
          onSubmit={submitHandler}
        >
          <div>
            <label className="form-label">Song Title:</label>
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
            <input
              type="text"
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
            {/* <input type="number" className='form-control' onChange={(e) => setRating(e.target.value)} /> */}
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div>
            <label className="form-label">Lyric Quote:</label>
            {errors.quote && (
              <p className="text-danger">{errors.quote.message}</p>
            )}

            <textarea
              className="form-control"
              cols="30"
              rows="10"
              onChange={(e) => setQuote(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-info-outline-dark m-3 btn-submit">
              Add Lyric Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SongForm;
