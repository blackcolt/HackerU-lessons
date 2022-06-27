import React from "react";
import PlaterCard from "./PlaterCard";

function PlayerCards(props) {
  const { players = [] } = props;
  return players.map((player) => <PlaterCard {...player} />);
}

export default PlayerCards;
