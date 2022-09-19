import React from "react";
import NavBar from "../components/NavBar";
import ReadOneQuote from "../components/ReadOneQuote";

const Details = (props) => {
  const { songCards, setSongCards, removeFromList } = props;

  return (
    <div>
      <NavBar />
      <hr />
      <ReadOneQuote
        songCards={songCards}
        setSongCards={setSongCards}
        removeFromList={removeFromList}
      />
    </div>
  );
};

export default Details;
