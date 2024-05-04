import React from "react";
import "./login.css";
import SvgCross from "../../svg/svg-cross/SvgCross";

const Login = function ({ visible, setVisible, getData }) {
  let visibleClassName = "login_window";
  if (visible) {
    visibleClassName += " login_window_active";
  }

  return (
    <div className={visibleClassName}>
      <div className="content_login_window">
        <div className="header_login_window">
          <SvgCross getData={getData} />
        </div>
        <form className="login_form">
          <h1>Вход в аккаунт</h1>
          <div className="login_password_name">
            <p>Логин</p>
            <input className="login_form_input" type="text" />
          </div>
          <div className="login_password_name">
            <p>Пароль</p>
            <input className="login_form_input" type="current-password" />
          </div>
          <button className="btn_login">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
