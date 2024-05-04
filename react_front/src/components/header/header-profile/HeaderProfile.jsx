import React from "react";
import "./headerProfile.css";
import { Link } from "react-router-dom";
import SvgNotice from "../../../svg/svg-notice/SvgNotice";
const HeaderProfile = function () {
  return (
    <div className="navbar">
      <SvgNotice/>
      <Link to="/profile">
        <button className="profile"></button>
      </Link>
    </div>
  );
};
export default HeaderProfile;
