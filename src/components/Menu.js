import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/scetlogo3.png';
import '../App.css';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <img src={logo} alt="Logo" className="menu-logo" />
        <li>
          <NavLink to="/" exact>
            <i className="fas fa-home"></i> <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/post">
            <i className="fas fa-edit"></i> <span>Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends">
            <i className="fas fa-users"></i> <span>Friends</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <i className="fas fa-user"></i> <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <i className="fas fa-sign-in-alt"></i> <span>Login</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/register">
            <i className="fas fa-user-plus"></i> <span>Register</span>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Menu;