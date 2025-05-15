import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid d-flex justify-content-between">

        {/* Brand and Links in one row */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="#">{props.title}</a>

          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          { /* <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="/about">About</a>
            </li>*/}
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
          </div>
        </div>

        {/* Search Box */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">Search</button>
        </form>

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About'
};
