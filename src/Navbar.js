import React from 'react';
import './Navbar.css';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="https://biblusi.ge/_nuxt/img/bibluslogo.7591321.png" alt="Biblusi Logo" className="club-badge" /></div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart">Card</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
