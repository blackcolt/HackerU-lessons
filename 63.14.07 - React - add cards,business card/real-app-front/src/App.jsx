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
import SignupBiz from "./components/signupBiz";
import CreateCard from "./components/createCard";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import DeleteCard from "./components/deleteCard";

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

          <Route
            path="/my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <DeleteCard />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="signupBiz"
            element={<SignupBiz redirect="my-cards/create-card" />}
          />
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
