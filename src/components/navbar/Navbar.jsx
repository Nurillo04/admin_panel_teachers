import React from "react";
import "./Navbar.scss";
import { logo } from "../../assets";
import { NavLink } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <div>
      <navbar className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__left">
            <h4 className="navbar__title"></h4>
            <NavLink to="/empty">
              <p className="navbar__text"> Student</p>
            </NavLink>
            <p className="navbar__text">/</p>
            <NavLink to="/">
              <p className="navbar__text">Teachers</p>
            </NavLink>
            <p className="navbar__text">/</p>
            <NavLink to="/add-product">
              <p className="navbar__text">Login</p>
            </NavLink>
          </div>

          <div className="navbar__right">
            {name ? name : null}
            <NavLink className="navbar__right" to="/login">
              <img src={logo} alt="logo" />
              <p className="navbar__exit">Выйти</p>
            </NavLink>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
