import React, { useState } from "react";
import "./checkUsers.css";
import Header from "../components/header/Header";

const CheckUsers = () => {
  return (
    <>
      <Header />
      <div className="check-users container">
        <div className="check-users__header">
          <div className="check-users__finder">
            <input placeholder="Найти пользователя" />
            <select>
              <option defaultChecked value="">роль пользователя</option>
            </select>
          </div>
          <div className="check-users__visited_title">
            <p>Посетившие мероприятие</p>
          </div>
        </div>
        <div className="check-users__list">
          <div className="check-users__list_confirm">
            <div className="check-users__user">
              <div className="check-users__user_logo"></div>
              <div className="check-users__user_info">
                <h1>Антипов Дмитрий Павлович</h1>
                <p>Junior Python разработчик </p>

                <div className="check-users__user_role-btn">
                  <p>сотрудник</p>
                  <button>
                    <img src="../images/confirm-user.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="check-users__list_visited">
            <div className="check-users__user">
              <div className="check-users__user_logo"></div>
              <div className="check-users__user_info">
                <h1>Антипов Дмитрий Павлович</h1>
                <p>Junior Python разработчик </p>

                <div className="check-users__user_role-btn">
                  <p>сотрудник</p>
                  <button>
                    <img src="../images/confirm-user.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckUsers;
