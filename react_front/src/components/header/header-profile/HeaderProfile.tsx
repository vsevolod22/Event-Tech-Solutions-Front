import React, { useState, useEffect, useRef } from "react";
import "./headerProfile.css";
import { Link } from "react-router-dom";
import SvgNotice from "../../../svg/svg-notice/SvgNotice";
const HeaderProfile = function () {
  const [id, setId] = React.useState(localStorage.getItem("id"));

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  const logOut = () => {
    closeMenu();
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="navbar">
      <SvgNotice />
      <div className="profile-menu-container" ref={menuRef}>
        <button className="profile" onClick={toggleMenu}></button>
        {isOpen && (
          <div className="window_profile">
            <Link to={`/profile/${id}`} onClick={closeMenu}>
              <p>Профиль</p>
            </Link>
            <Link onClick={logOut}>
              <p>Выйти</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderProfile;
