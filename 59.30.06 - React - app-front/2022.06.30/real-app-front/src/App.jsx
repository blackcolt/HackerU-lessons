import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app d-flex flex-column  min-vh-100">
      <Navbar />

      <main className="container flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
