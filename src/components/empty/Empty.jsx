import React from "react";
import "./Empty.scss";
import { korzinka } from "../../assets";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Asside from "../aside/Asside";

const Empty = () => {
  return (
    <div className="empty">
      <div className="Aps">
        <div>
          <Asside />
        </div>

        <div>
          <Navbar />
          <div className="empty__wrapper">
            <h4 className="empty__title">
              Вы пока не создали ни одного товара
            </h4>
            <img className="empty__img" src={korzinka} alt="korzinka" />
            <NavLink to="/add-product">
              <div className="empty__btns">
                <button className="empty__btn">Создать первый товар</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
