import React from 'react';
import { NavLink } from 'react-router-dom';
import myimage from './assets/Innomatics-Logo1.webp'

export default function Navbar() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d1">
        <div>
            <NavLink to="/home"><img src={myimage} className='img1'/></NavLink>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink className="nav-link" to="/home" a>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}