import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/signin";
import Logout from "./components/logout";

function App() {
  return (
    <div className="app d-flex flex-column  min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>

      <main className="container flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup redirect="/signin" />} />
          <Route path="signin" element={<SignIn redirect="/" />} />
          <Route path="signout" element={<Logout redirect="/" />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
