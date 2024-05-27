import React from "react";
import "./headerProfile.css";
import { Link } from "react-router-dom";
import SvgNotice from "../../../svg/svg-notice/SvgNotice";
const HeaderProfile = function () {
  const [id, setId] = React.useState(localStorage.getItem("id"));
  return (
    <div className="navbar">
      <SvgNotice/>
      <Link to={`/profile/${id}`}>
        <button className="profile"></button>
      </Link>
    </div>
  );
};
export default HeaderProfile;
