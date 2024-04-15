import React from "react";
import "./adminHeader.css";
import Logo from "../logo/Logo.jsx";
import HeaderProfile from "../header-profile/HeaderProfile.jsx";

const AdminHeader = function () {
  return (
    <>
      <Logo />
      <div className="privilege_navbar">
        <ul>
          <li>
            <a href="/event">Мероприятия</a>
          </li>
          <li>
            <a href="/event">Пользователи</a>
          </li>
          <li>
            <a href="/event">Статистика</a>
          </li>
        </ul>
      </div>
      <HeaderProfile/>
    </>
  );
};

export default AdminHeader;
