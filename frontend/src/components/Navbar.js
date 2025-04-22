import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">TechShop</div>

      <ul className="navbar__menu">
        <li className="navbar__menu-item">Home</li>
        <li className="navbar__menu-item">Contact</li>
        <li className="navbar__menu-item">About</li>
        <li className="navbar__menu-item">Sign Up</li>
      </ul>

      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="What are you looking for?"
        />
        <i className="fas fa-search navbar__search-icon">🔎</i>
      </div>

      <div className="navbar__icons">
        <i className="fas fa-heart navbar__icon">♥</i>
        <i className="fas fa-shopping-cart navbar__icon">🛒</i>

        <div className="navbar__user-dropdown">
          <i className="fas fa-user navbar__icon">👤</i>
          <ul className="navbar__dropdown-menu">
            {/* <li className="navbar__dropdown-item">Manage My Account</li>
            <li className="navbar__dropdown-item">My Order</li>
            <li className="navbar__dropdown-item">My Cancellations</li>
            <li className="navbar__dropdown-item">My Reviews</li>
            <li className="navbar__dropdown-item">Logout</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
