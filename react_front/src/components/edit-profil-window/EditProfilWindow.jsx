import React, { useState, useRef, useEffect } from "react";
import { HttpApiMethods } from "../../components/utils/FetchUtils.tsx";
import "./editProfilWindow.css";
import axios from "axios";

const httpApiMethods = new HttpApiMethods();

const EditProfilWindow = ({ onClose, userId }) => {
  // console.log(userId);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    job: "",
    avatar: "",
    telegram: "",
    mail: "",
  });
  const modalRef = useRef(null);

  const fileInputRef = useRef(null); // Ссылка на скрытый input

  const handlePlusClick = () => {
    // Открываем диалог выбора файла
    fileInputRef.current.click();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await httpApiMethods.GetUserById(userId);
      if (data) {
        setUserData(data);
        console.log(data);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserData((prev) => ({ ...prev, avatar: file }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    try {
      const response = await axios.patch(
        `http://5.42.82.220:8000/api/users/user/${userId}/`,
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${httpApiMethods.API_KEY}`,
          },
        }
      );
      console.log("Профиль успешно обновлен:", response.data);
      onClose(); // Закрываем модальное окно после успешного обновления
    } catch (error) {
      console.error("Ошибка при обновлении профиля:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="edit-profil-window" ref={modalRef}>
        <div className="edit-profil-window__title">
          <h1>Редактирование профиля</h1>
        </div>
        <form className="edit-profil-window__form" onSubmit={handleSubmit}>
          <div className="edit-profil-window__logo">
            {userData.avatar ? (
              <img src={userData.avatar || ""} alt="Аватар" />
            ) : (
              <div className="edit-profil-window__logo_template"></div>
            )}
            <div
              onClick={handlePlusClick}
              className="edit-profil-window__logo_add"
            >
              +
            </div>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="edit-profil-window__inputs">
            <input
              type="text"
              name="first_name"
              className="edit-profil-window__inputs_input"
              placeholder="Имя"
              value={userData.first_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="last_name"
              className="edit-profil-window__inputs_input"
              placeholder="Фамилия"
              value={userData.last_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="job"
              className="edit-profil-window__inputs_input"
              placeholder="Должность"
              value={userData.job}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="telegram"
              className="edit-profil-window__inputs_input"
              placeholder="Telegram(необязательно)"
              value={userData.telegram}
              onChange={handleInputChange}
            />
            <input
              name="mail"
              type="text"
              className="edit-profil-window__inputs_input"
              placeholder="Почта(необязательно)"
              value={userData.mail}
              onChange={handleInputChange}
            />
            <button type="submit" className="edit-profil-window__inputs_btn">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilWindow;
