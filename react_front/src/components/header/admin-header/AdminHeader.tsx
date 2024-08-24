import React from "react";
import "./adminHeader.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import HeaderProfile from "../header-profile/HeaderProfile";

const AdminHeader = function () {
  return (
    <>
      <Logo />
      <div className="privilege_navbar">
        <ul>
          <Link to="/all-events">
            <li>Мероприятия</li>
          </Link>
          <li>Пользователи</li>
          <li>Статистика</li>
        </ul>
      </div>
      <HeaderProfile />
    </>
  );
};

export default AdminHeader;
