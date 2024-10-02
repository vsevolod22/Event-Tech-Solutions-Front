import React, { useState, useRef, useEffect } from "react";
import "./editProfilWindow.css";

const EditProfilWindow = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Добавляем обработчик событий для клика
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Удаляем обработчик событий при размонтировании компонента
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="edit-profil-window" ref={modalRef}>
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
            <button
              className="edit-profil-window__inputs_btn"
              onClick={onClose}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilWindow;
