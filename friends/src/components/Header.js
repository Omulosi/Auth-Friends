import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="header mb-5">
        <nav className="navbar navbar-expand-lg navbar-ligh bg-light shadow">
          <Link to="/" className="navbar-brand">React-Auth</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/friends" className="nav-link">Friends</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-friend" className="nav-link">Add Friend</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;
