import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ZooPage from "./pages/ZooPage";
import AnimlePage from "./pages/AnimlePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="animels">
          <Route path="" element={<ZooPage />} />
          <Route path=":animleId" element={<AnimlePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
