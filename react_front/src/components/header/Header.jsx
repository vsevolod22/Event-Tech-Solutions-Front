import React from "react";
import "./header.css";
import AdminHeader from "./admin-header/AdminHeader.jsx";
import InitHeader from "./init-header/InitHeader.jsx";
import RegHeader from "./reg-header/RegHeader.jsx";

const Header = function (props) {
  return (
    <>
      <div className="header">
        {props.user.reg && props.user.role !== 2 ? (
          <RegHeader />
        ) : props.user.reg && props.user.role === 2 ? (
          <AdminHeader />
        ) : (
          <InitHeader></InitHeader>
        )}
      </div>
    </>
  );
};

export default Header;
