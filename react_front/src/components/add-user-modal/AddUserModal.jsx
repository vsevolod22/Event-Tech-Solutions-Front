import React, { useState } from "react";
import "./addUserModal.css";
import { HttpApiMethods } from "../../components/utils/FetchUtils.tsx";

const httpApiMethods = new HttpApiMethods();

const AddUserModal = function ({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    job: "",
    avatar: "",
    vk: "",
    telegram: "",
    mail: "",
    phone_number: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    try {
      // Вызываем функцию PostUser для отправки данных
      const response = await httpApiMethods.PostUser(formData);
      console.log("Пользователь добавлен:", response);
      // Обработка успешного добавления (например, закрытие модального окна)
      onClose();
    } catch (error) {
      console.error("Ошибка при добавлении пользователя:", error);
      // Обработка ошибки (например, отображение сообщения об ошибке)
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <form className="add_user" onSubmit={handleSubmit}>
      <div className="header_add_user">
        <p>Добавление пользователя</p>
        <div className="svg_black_cross" onClick={handleClose}>
          <svg
            width="2.396vw"
            height="2.448vw"
            viewBox="0 0 46 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3561 35.5981L10.784 13.026L12.5074 11.3025L35.0796 33.8747L33.3561 35.5981ZM12.2295 35.8205L10.6172 34.2082L33.7453 11.0801L35.3576 12.6924L12.2295 35.8205Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="add_user_inputs">
        <div className="add_logo_user"></div>
        <div className="adds_inputs_user">
          <input
            name="username"
            className="input_add_user"
            onChange={handleInputChange}
            value={formData.username}
            type="text"
            placeholder="Логин специалиста/сотрудника"
          />
          <input
            name="first_name"
            className="input_add_user"
            onChange={handleInputChange}
            value={formData.first_name}
            type="text"
            placeholder="Имя специалиста/сотрудника"
          />
          <input
            name="last_name"
            className="input_add_user"
            onChange={handleInputChange}
            value={formData.last_name}
            type="text"
            placeholder="Фамилия специалиста/сотрудника"
          />
          <input
            name="password"
            className="input_add_user"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Пароль"
          />
          <input
            name="job"
            className="input_add_user"
            value={formData.job}
            onChange={handleInputChange}
            type="text"
            placeholder="Должность"
          />
          <input
            name="mail"
            className="input_add_user"
            type="text"
            placeholder="Почта"
            value={formData.mail}
            onChange={handleInputChange}
          />
          <input
            name="telegram"
            className="input_add_user"
            type="text"
            placeholder="TG"
            value={formData.telegram}
            onChange={handleInputChange}
          />
          <input
            name="phone_number"
            className="input_add_user"
            type="text"
            placeholder="Номер телефона"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="add_user_btns">
        <button type="submit" className="btn_add_user">
          Добавить
        </button>
        <button onClick={handleClose} className="btn_cancel_add_user">
          Отменить
        </button>
      </div>
    </form>
  );
};

export default AddUserModal;
