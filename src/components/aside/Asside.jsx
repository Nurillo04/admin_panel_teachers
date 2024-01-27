import React from "react";
import "./Aside.scss";

import { mask, tovar, profil, nastroyka } from "../../assets";
import { NavLink } from "react-router-dom";

const Asside = () => {
  return (
    <div>
      <aside className="aside">
        <div className="container">
          <div className="aside__wrapper">
            <NavLink to="/">
              <h4 className="title4">Teachers</h4>
            </NavLink>
            <NavLink to="/Empty">
              <h4 className="title4">Students</h4>
            </NavLink>
            <NavLink to="/login">
              <h4 className="title4">Login</h4>
            </NavLink>
            <NavLink to="/add-product">
              <h4 className="title4">Profile</h4>
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Asside;
