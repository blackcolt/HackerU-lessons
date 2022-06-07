import * as React from "react";
import { Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  const goToSomeWhere = Math.floor(Math.random() * 10);
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route
            path="random"
            element={
              goToSomeWhere ? <Navigate to="/" /> : <Navigate to="/about" />
            }
          ></Route>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </PageWrapper>
      <NavLink activeClassName="moshe" to={true ? "1" : "2"}>
        about
      </NavLink>
      <NavLink to="/">home</NavLink>
    </div>
  );
}
export default App;
