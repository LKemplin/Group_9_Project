import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const Logandreg = (props) => {
  //useState for user in app.js
  const { setIsLoggedIn } = props;
  const [errors, setErrors] = useState({});
  const icons = <FontAwesomeIcon icon={faIcons} />;

  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        navigate("/songquotes/dashboard");
      })
      .catch((err) => {
        console.log("error in login", err);
        setErrors(err.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="">Welcome! {icons} SongQuotes</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-4 m-5">
          <h1 className="text text-light">Login</h1>
          {/* Login Form */}
          <form className="form m-3 text-center" onSubmit={loginHandler}>
            <div className="form-group">
              <label className="form-label text text-light">Email: </label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            {errors.error && <p className="text-danger">{errors.error}</p>}
            <div className="form-group">
              <label className="text text-light">Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
            <button
              className="btn text text-dark fw-bolder m-3"
              style={{ backgroundColor: "transparent" }}
            >
              Login
            </button>
          </form>
          <br></br>
          <p>
            No account? <a href="/register">Register</a>
          </p>
        </div>
        {/* <div className="col-4 m-5">
          <h1 className="text text-light">Register</h1>
          <form className="form" onSubmit={registerHandler}>
            <div className="form-group">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                value={user.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
            <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={user.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                className="form-control"
                value={user.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <div className="form-group">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={user.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
            <div className="form-group">
              <label className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={user.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
            <button
              className="btn text text-dark fw-bolder m-3"
              style={{ backgroundColor: "transparent" }}
            >
              Create Account
            </button>
          </form>
        </div> */}
      </div>
    </div>
    //   {/* Registration Form */}
    // </div>
  );
};

export default Logandreg;
