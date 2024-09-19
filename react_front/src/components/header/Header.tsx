import React, { FC } from "react";
import "./header.css";
import AdminHeader from "./admin-header/AdminHeader.tsx";
import InitHeader from "./init-header/InitHeader.tsx";
import RegHeader from "./reg-header/RegHeader.tsx";

interface HeaderProps {
  getData: (data: number) => void; // Функция для получения данных
}

const Header: FC<HeaderProps> = ({ getData, isBlurred }) => {
  return (
    <>
      <div className={isBlurred ? "header blurred" : "header"}>
        {localStorage.getItem("token") &&
        localStorage.getItem("groups") != "Администраторы" &&
        localStorage.getItem("id") ? (
          <RegHeader />
        ) : localStorage.getItem("token") &&
          localStorage.getItem("id") &&
          localStorage.getItem("groups") == "Администраторы" ? (
          <AdminHeader />
        ) : (
          <InitHeader getData={getData} />
        )}
      </div>
    </>
  );
};

export default Header;
