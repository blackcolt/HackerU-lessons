import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCards from "./components/PlayerCards";
import Room from "./components/Room";
// import PlayerCard from "./components/PlaterCard";
import StateCardFunction from "./components/StateCardF";
import playerData from "./data/players.json";

//checklist:
// Detect if there are URI params.
// if there are NO uri params show all ther players
// else show the right player

function App() {
  // const id = +(new URLSearchParams(window.location.search).get("id") ?? -1);
  // function getPlayerById(playerId) {
  //   return playerData.find((player) => player.id === id);
  // }
  // if (id === -1) {
  //   return playerData.map((player) => <PlayerCard {...player} />);
  // }
  // const player = getPlayerById(id);
  // return <PlayerCard {...player} />;
  return <PlayerCards players={playerData} />;
  // return playerData.map((player) => <Room key={player.id} />);
}

export default App;
