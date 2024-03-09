import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/"><h2>Coursera</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/explore">Explore</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/signup">Sign Up</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-primary btn-sm w-50 p-3 ms-5 btn btn-primary btn-sm" to="/login">Log In</Link>
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
