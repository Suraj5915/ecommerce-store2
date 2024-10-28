import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyECommerce</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
