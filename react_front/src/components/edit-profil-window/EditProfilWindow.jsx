import React, { useState, useRef, useEffect } from "react";
import "./editProfilWindow.css";

const EditProfilWindow = ({ }) => {
  // let visibleClassName = "modal-edit-profil-window";
  // if (visible) {
  //   visibleClassName = "modal-edit-profile-window__active"
  // }

  // const handleSumbit = () => {
    // setVisible(0)
  // }
  return (
    <div className="modal-overlay">
      <div className="edit-profil-window">
        <div className="edit-profil-window__title">
          <h1>Редактирование профиля</h1>
        </div>
        <form className="edit-profil-window__form">
          <div className="edit-profil-window__logo">
            <img src="" alt="" />
            <button className="edit-profil-window__logo_add">+</button>
          </div>
          <div className="edit-profil-window__inputs">
            <input
              type="text"
              className="edit-profil-window__inputs_input"
              placeholder="ФИО"
            />
            <input
              type="text"
              className="edit-profil-window__inputs_input"
              placeholder="Должность"
            />
            <input
              type="text"
              className="edit-profil-window__inputs_input"
              placeholder="Telegram(необязательно)"
            />
            <input
              type="text"
              className="edit-profil-window__inputs_input"
              placeholder="Почта(необязательно)"
            />
            <button className="edit-profil-window__inputs_btn">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilWindow;
