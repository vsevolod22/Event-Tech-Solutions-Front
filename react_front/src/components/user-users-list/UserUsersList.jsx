import React from "react";
import "./userUsersList.css";

const UserUsersList = function () {
  return (
    <div className="user_users_list">
      <div className="logo_role">
        <div className="logo_role_img"></div>
        <div className="logo_role_text">Администратор</div>
      </div>
      <div className="user_info">
        <h1>Кириллов Алексей Викторович</h1>
        <h2>Junior PHP разработчик</h2>
        <p>TG: @dkir</p>
        <p>gmail@gmail.com</p>
      </div>
    </div>
  );
};

export default UserUsersList;
