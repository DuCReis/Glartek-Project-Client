import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Weather
          </Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav row">
              <li className="nav-item col-sm-4">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item col-sm-4">
                <Link
                  className="nav-link active text-light me"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
