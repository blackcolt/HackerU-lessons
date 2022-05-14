import "./App.css";
import Table from "./components/Table";
import Promotion from "./components/Promotion";
import "bootstrap/dist/css/bootstrap.css";
import users from "./data/users.json";
import dogs from "./data/dogs.json";

function App() {
  return (
    <div className="App">
      {/* <img
        className="rounded-full"
        src="https://randomuser.me/api/portraits/women/81.jpg"
        alt="user"
      />
      <p className="text-3xl font-bold underline">1111</p> */}
      <Table users={users} />
      <Table users={dogs} />
      {/* <Promotion deal={5} precentage={50} />
      <Promotion deal={10} precentage={4} />
      <Promotion deal={10} /> */}
    </div>
  );
}

export default App;
