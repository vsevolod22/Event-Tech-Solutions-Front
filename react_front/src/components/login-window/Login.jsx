import React from "react";
import "./login.css";
import SvgCross from "../../svg/svg-cross/SvgCross";
import { HttpApiMethods } from '../utils/FetchUtils.tsx';

const httpApiMethods = new HttpApiMethods()
const Login = function ({ visible, setVisible, getData }) {
  let visibleClassName = "login_window";
  if (visible) {
    visibleClassName += " login_window_active";
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
   
    // Получаем данные из полей формы
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const email = ''
   
    // Собираем данные в объект
    const data = {
      username,
       email,
       password
    };
   
    // Вызываем функцию GetUserAuth с данными
    try {
      const response = await httpApiMethods.GetUserAuth(data)
       console.log(response); // Выводим ответ сервера
       localStorage.setItem("token", response.access);
       localStorage.setItem("id", response.user.id);

    } catch (error) {
       console.error(error);
    }
 
    setVisible(0);
   }

  return (
    <div className={visibleClassName}>
      <div className="content_login_window">
        <div className="header_login_window">
          <SvgCross getData={getData} />
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          <h1>Вход в аккаунт</h1>
          <div className="login_password_name">
            <p>Логин</p>
            <input className="login_form_input" type="text" name="username" />
          </div>
          <div className="login_password_name">
            <p>Пароль</p>
            <input className="login_form_input" type="current-password" name="password" />
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
