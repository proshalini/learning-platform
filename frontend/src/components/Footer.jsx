import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>We are dedicated to providing high-quality educational content to learners worldwide.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/explore">Courses</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><Link to="https://www.facebook.com/Coursera">Facebook</Link></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

