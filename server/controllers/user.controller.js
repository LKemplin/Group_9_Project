const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    console.log("New user", newUser);
    const userToken = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
      },
      SECRET
    );
    res
      .status(201)
      .cookie("userToken", userToken)
      .json({
        successMessage: "user created",
        user: {
          _id: newUser._id,
          email: newUser.email,
        },
      });
  } catch (e) {
    console.log("Error in user creation", e);
    res.json(e);
  }
};

const login = async (req, res) => {
  const userDoc = await User.findOne({ email: req.body.email });
  if (!userDoc) {
    res.status(400).json({ message: "Invalid login" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userDoc.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ message: "Invalid login" });
      } else {
        const userToken = jwt.sign(
          {
            _id: userDoc._id,
            email: userDoc.email,
          },
          SECRET
        );
        res.cookie("userToken", userToken).json({
          successMessage: "user created",
          user: {
            _id: userDoc._id,
            email: userDoc.email,
          },
        });
      }
    } catch (e) {
      console.log("Login error", e);
      res.status(400).json({ message: "invalid login" });
    }
  }
};

const logout = (req, res) => {
  res.clearCookie("userToken");
  res.json({ message: "You are logged out" });
};

module.exports = { register, login, logout };
