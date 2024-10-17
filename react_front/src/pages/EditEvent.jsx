import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import SvgOnlineOffline from "../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../svg/svg-clock/SvgCLock";
import { HttpApiMethods } from "../components/utils/FetchUtils";
import UserUsersList from "../components/user-users-list/UserUsersList";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent";
import "./createEvent.css";

const httpApiMethods = new HttpApiMethods();

const EditEvent = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Получаем ID мероприятия из URL
  const [UsersList, setUsersList] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [modal, setModal] = useState(0);

  // Массив с доступными типами мероприятий
  const eventTypes = [
    { id: 1, name: "Здоровье" },
    { id: 2, name: "Спорт" },
    { id: 3, name: "Культура" },
    { id: 4, name: "Образование" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    event_type: 0,
    place: "",
    time_start: "",
    time_end: "",
    reference: "",
    reference_video: "",
    is_online: false,
    description: "",
  });

  const getValueModal = (data) => {
    setModal(data);
  };

  // Получаем данные мероприятия по ID
  useEffect(() => {
    const fetchEvent = async () => {
      const eventData = await httpApiMethods.GetMeetingById(id);
      if (eventData) {
        setFormData({
          name: eventData.name || "",
          event_type: eventData.event_type || 0,
          place: eventData.place || "",
          time_start: eventData.time_start || "",
          time_end: eventData.time_end || "",
          reference: eventData.reference || "",
          reference_video: eventData.reference_video || "",
          is_online: eventData.is_online || false,
          description: eventData.description || "",
        });
        setSelectedSpeakerId(eventData.speaker || null);
      }
    };
    fetchEvent();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await httpApiMethods.GetAllUsers();
      if (users) {
        setUsersList(users);
        setFilteredUsers(users);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    if (UsersList) {
      if (role === "") {
        setFilteredUsers(UsersList);
      } else {
        const filtered = UsersList.filter(
          (user) =>
            user.groups && user.groups.length && user.groups[0].name === role
        );
        setFilteredUsers(filtered);
      }
    }
  };

  const handleSelectSpeaker = (speakerId) => {
    setSelectedSpeakerId(speakerId);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmitEvent = async (event) => {
    event.preventDefault();

    if (!selectedSpeakerId) {
      alert("Пожалуйста, выберите спикера");
      return;
    }

    const eventData = new FormData();
    eventData.append("name", formData.name);
    eventData.append("event_type", String(formData.event_type));
    eventData.append("place", formData.place);
    eventData.append("time_start", formData.time_start);
    eventData.append("time_end", formData.time_end);
    eventData.append("reference", formData.reference);
    eventData.append("reference_video", formData.reference_video);
    eventData.append("is_online", String(formData.is_online));
    eventData.append("description", formData.description);
    eventData.append("speaker", String(selectedSpeakerId));

    if (imageFile) {
      eventData.append("image", imageFile);
    }

    try {
      const response = await httpApiMethods.PatchMeetingById(id, eventData);
      if (response) {
        navigate("/");
      } else {
        console.error("Ошибка при обновлении мероприятия");
      }
    } catch (error) {
      console.error("Ошибка при обновлении мероприятия:", error);
    }
  };

  return (
    <>
      <Header getData={getValueModal}></Header>
      <form className="create_event container" onSubmit={handleSubmitEvent}>
        <section className="main_section_create_event">
          <div className="main_section_create_event_column">
            {/* Название мероприятия */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ввести название мероприятия"
              className="main_content_create_event_name_event"
            />

            {/* Поле для ввода места проведения */}
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={(e) =>
                setFormData({ ...formData, place: e.target.value })
              }
              placeholder="Место проведения мероприятия"
              className="main_content_create_event_place"
            />

            <div className="small_info_blocks_create_event">
              {/* Тип мероприятия */}
              <div className="types_event_create_event">
                <div className="type_event_create_event">Тип мероприятия</div>
                <select
                  value={formData.event_type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      event_type: Number(e.target.value),
                    })
                  }
                  className="block_type_of_conduct"
                >
                  <option value="0" disabled>
                    Выберите тип мероприятия
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Тип проведения: онлайн/оффлайн */}
              <div className="type_of_conduct">
                <SvgOnlineOffline></SvgOnlineOffline>
                <select
                  className="block_type_of_conduct"
                  value={formData.is_online ? "online" : "offline"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      is_online: e.target.value === "online",
                    })
                  }
                >
                  <option value="online">Онлайн</option>
                  <option value="offline">Оффлайн</option>
                </select>
              </div>

              {/* Дата и время начала и окончания */}
              <div className="date_time_of_conduct">
                <SvgClock></SvgClock>
                <input
                  type="date"
                  value={formData.time_start}
                  onChange={(e) =>
                    setFormData({ ...formData, time_start: e.target.value })
                  }
                  placeholder="Дата начала"
                  className="date_of_conduct"
                />
                <input
                  type="time"
                  className="time_of_conduct"
                  onChange={(e) =>
                    setFormData({ ...formData, time_start: e.target.value })
                  }
                />
                <input
                  type="date"
                  value={formData.time_end}
                  onChange={(e) =>
                    setFormData({ ...formData, time_end: e.target.value })
                  }
                  placeholder="Дата окончания"
                  className="date_of_conduct"
                />
                <input
                  type="time"
                  className="time_of_conduct"
                  onChange={(e) =>
                    setFormData({ ...formData, time_end: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Ссылки */}
            <input
              className="link_event_create_event"
              value={formData.reference}
              onChange={(e) =>
                setFormData({ ...formData, reference: e.target.value })
              }
              placeholder="Ссылка на мероприятие"
            />
            <input
              className="link_video_create_event"
              value={formData.reference_video}
              onChange={(e) =>
                setFormData({ ...formData, reference_video: e.target.value })
              }
              placeholder="Добавить ссылку на видео"
            />
          </div>

          {/* Блок для добавления изображения */}
          <div className="main_section_create_event_column">
            <div className="img_block_main_section">
              <label className="add_img_main_section">
                +
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
              <p>Добавить изображение</p>
              {imageFile && <p>{imageFile.name}</p>}{" "}
              {/* Отображаем название файла */}
            </div>
          </div>
        </section>

        {/* Описание мероприятия */}
        <section className="about_event_section_create_event">
          <h1>О мероприятии</h1>
          <textarea
            placeholder="Написать описание мероприятия"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </section>

        {/* Выбор специалиста */}
        <section className="specialist_section_create_event">
          <h1>Специалист</h1>
          <div className="simple_filter">
            <InputFindEvent />
            <select
              name="role_filter"
              id="role_filter"
              className="type_event_select"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="">Все роли</option>
              <option value="Администраторы">Администраторы</option>
              <option value="Менеджеры">Менеджеры</option>
            </select>
          </div>
          <div className="users_list">
            {filteredUsers &&
              filteredUsers.map((user) => (
                <div
                  onClick={() => handleSelectSpeaker(user.id)}
                  key={user.id}
                  className={
                    selectedSpeakerId === user.id ? "user-selected" : ""
                  }
                >
                  <UserUsersList user={user} />
                </div>
              ))}
          </div>
        </section>

        {/* Кнопка "Опубликовать мероприятие" */}
        <section className="btn_section_create_event">
          <button type="submit" className="btn_post_event">
            Обновить мероприятие
          </button>
        </section>
      </form>
    </>
  );
};

export default EditEvent;
