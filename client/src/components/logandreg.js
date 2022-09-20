import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const Logandreg = (props) => {
  //useState for user in app.js

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const icons = <FontAwesomeIcon icon={faIcons} />;

  const navigate = useNavigate();

  // const registerHandler
  const registerHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((results) => {
        console.log(results);
        // setUser(results)?
        navigate("/songquotes/dashboard"); /* navigate to dashboard */
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", {
        email,
        password,
      })
      .then()
      .catch((err) => {
        console.log("error in login", err);
        setErrors(err.response.data);
      });
  };

  return (
    <div className="container">
      <div className="welcome">
        <h1 className="">Welcome! {icons} SongQuotes</h1>
      </div>
      <div className="form-container-lr">
        <h1 className="text text-light">Login</h1>
        {/* Login Form */}
        <form className="login-registration" onSubmit={loginHandler}>
          <div className="form-group">
            <label className="form-label">Email: </label>
            <input
              className="form-control"
              type="text"
              name="email"
              //   value={user.email}
            />
          </div>
          {errors.error && <p className="text-danger">{errors.error}</p>}
          <br></br>
          <div className="form-group">
            <label className="form-label fw-bold">Password: </label>
            <input
              className="form-control"
              type="password"
              name="password"
              //   value={user.password}
            />
          </div>
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
          <br></br>
          <button
            className="btn text text-dark fw-bolder"
            style={{ backgroundColor: "transparent" }}
          >
            Login
          </button>
        </form>
      </div>
      {/* Registration Form */}
      <div className="form-container-lr">
        <h1 className="text text-light">Register</h1>
        <form className="login-registration" onSubmit={registerHandler}>
          <div className="form-group">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              name="firstNme"
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
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword.message}</p>
          )}
          <br></br>
          <button
            className="btn text text-dark fw-bolder"
            style={{ backgroundColor: "transparent" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logandreg;
