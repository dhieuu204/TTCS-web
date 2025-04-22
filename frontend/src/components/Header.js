import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">TechShop</div>

      <ul className="header__menu">
        <li className="header__menu-item">Home</li>
        <li className="header__menu-item">Contact</li>
        <li className="header__menu-item">About</li>
        <li className="header__menu-item">Sign Up</li>
      </ul>

      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="What are you looking for?"
        />
        <i className="fas fa-search header__search-icon">🔎</i>
      </div>

      <div className="header__icons">
        <i className="fas fa-heart header__icon">♡︎</i>
        <i className="fas fa-shopping-cart header__icon">🛒</i>

        <div className="header__user-dropdown">
          <i className="fas fa-user header__icon"></i>
          <ul className="header__dropdown-menu">
            {/* <li className="header__dropdown-item">Manage My Account</li>
            <li className="header__dropdown-item">My Order</li>
            <li className="header__dropdown-item">My Cancellations</li>
            <li className="header__dropdown-item">My Reviews</li>
            <li className="header__dropdown-item">Logout</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
