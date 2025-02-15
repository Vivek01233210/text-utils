import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(property) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${property.mode} navbar-${property.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {property.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {property.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={property.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${property.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,  // logs an error message in the console if we do not set the title.
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "Set About Us"
}