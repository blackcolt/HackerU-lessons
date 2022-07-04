import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light shadow-sm"
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Real<i className="bi bi-geo-fill"></i>App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Cards
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="signup" className="nav-link">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
