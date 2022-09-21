import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./views/Dashboard";
import AddQuotes from "./views/AddQuotes";
import Details from "./views/Details";
import EditQuote from "./views/EditQuote";
import Logandreg from "./components/logandreg";
// import logo from "./logo.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [songCards, setSongCards] = useState([]);

  const removeFromList = (songID) => {
    const newSongCards = songCards.filter((song) => {
      return song._id !== songID;
    });
    setSongCards(newSongCards);
  };
  return (
    <div className="App container">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Logandreg />} />
          <Route path="/" element={<Navigate to="/songquotes/dashboard" />} />
          <Route
            path="/songquotes/dashboard"
            element={
              <Dashboard
                songCards={songCards}
                setSongCards={setSongCards}
                default
              />
            }
          />
          <Route path="/songquotes/add" element={<AddQuotes />} />
          <Route
            path="/songquotes/details/:id"
            element={
              <Details
                songCards={songCards}
                setSongCards={setSongCards}
                removeFromList={removeFromList}
              />
            }
          />
          <Route path="/songquotes/edit/:id" element={<EditQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
