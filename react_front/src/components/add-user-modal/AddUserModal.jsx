import React from "react";
import "./addUserModal.css";

const AddUserModal = function ({ onClose }) {
  const handleAddUser = () => {
    onClose();
  };
  return (
    <form className="add_user">
      {/* onSubmit={handleSubmitUser}>*/}
      <div className="header_add_user">
        <p>Добавление пользователя</p>
        <div className="svg_black_cross" onClick={handleAddUser}>
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
            // onChange={handleChange}
            // value={formData.username}
            className="input_add_user"
            type="text"
            placeholder="ФИО специалиста/сотрудника"
          />
          <input
            name="password"
            // onChange={handleChange}
            // value={formData.password}
            className="input_add_user"
            type="password"
            placeholder="Пароль"
          />
          <input
            name="job"
            // onChange={handleChange}
            // value={formData.job}
            className="input_add_user"
            type="text"
            placeholder="Должность"
          />
          {/*<select*/}
          {/*    defaultValue="default_value_role"*/}
          {/*    className="select_add_user"*/}
          {/*    name="role"*/}
          {/*    id=""*/}
          {/*>*/}
          {/*  <option*/}
          {/*      disabled*/}
          {/*      style={{display: "none"}}*/}
          {/*      value="default_value_role"*/}
          {/*  >*/}
          {/*    Роль*/}
          {/*  </option>*/}
          {/*  <option value="user">Пользователь</option>*/}
          {/*  <option value="event-manager">Ивент-менеджер</option>*/}
          {/*  <option value="admin">Админ</option>*/}
          {/*</select>*/}
          <input
            name="mail"
            // onChange={handleChange}
            // value={formData.mail}
            className="input_add_user"
            type="text"
            placeholder="Почта"
          />
          <input
            name="telegram"
            // onChange={handleChange}
            // value={formData.telegram}
            className="input_add_user"
            type="text"
            placeholder="TG"
          />
          <input
            name="phone_number"
            // onChange={handleChange}
            // value={formData.phone_number}
            className="input_add_user"
            type="text"
            placeholder="Номер телефона"
          />
        </div>
      </div>
      <div className="add_user_btns">
        <button type="submit" className="btn_add_user" onClick={handleAddUser}>
          Добавить
        </button>
        <button onClick={handleAddUser} className="btn_cancel_add_user">
          Отменить
        </button>
      </div>
    </form>
  );
};

export default AddUserModal;
