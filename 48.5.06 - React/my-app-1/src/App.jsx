import "./App.css";
import HeaderNew from "./components/HeaderNew";

function App() {
  return (
    <div className="App">
      <HeaderNew subtitls={["title", "another title", "the best title"]} />
    </div>
  );
}
export default App;
