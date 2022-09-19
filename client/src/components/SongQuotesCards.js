import React, { useEffect } from "react";
import axios from "axios";
import SongCard from "./SongCard";

const SongQuotesCards = (props) => {
  const { songCards, setSongCards } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/music")
      .then((results) => {
        console.log(results.data);
        setSongCards(
          results.data.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row justify-content-md-center">
      {songCards.map((songCard) => (
        <SongCard key={songCard.id} songCard={songCard} />
      ))}
    </div>
  );
};

export default SongQuotesCards;
