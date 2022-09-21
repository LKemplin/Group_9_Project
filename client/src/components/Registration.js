import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

function Registration({ setIsLoggedIn }) {
  //const {setIsLoggedIn} = props
  const icons = <FontAwesomeIcon icon={faIcons} />;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("RES", res.data);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.log("error in registration", err);
        setErrors(err.response.data);
      });
  };
  return (
    <div className="container-fluid">
      <h1 className="">Welcome! {icons} SongQuotes</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-4 m-5">
          <h1 className="text text-light">Register</h1>
          <form className="form" onSubmit={handleSubmit}>
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
          <br></br>
          <p>
            Already registered? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
