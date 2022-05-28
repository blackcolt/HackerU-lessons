import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Month from "./pages/Month";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="month">
          <Route path=":monthId" element={<Month />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
