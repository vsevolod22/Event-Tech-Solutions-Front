import React from "react";
import Header from "../components/header/Header";
import "./createEvent.css";
import SvgOnlineOffline from "../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../svg/svg-clock/SvgCLock";

const CreateEvent = function ({ user }) {
  return (
    <>
      <Header user={user}></Header>
      <form className="create_event container">
        <section className="main_section_create_event">
          <div className="main_section_create_event_column">
            <input
              type="text"
              placeholder="Ввести название мероприятия"
              className="main_content_create_event_name_event"
            />
            <div className="small_info_blocks_create_event">
              <div className="types_event_create_event">
                <div className="type_event_create_event">Тип мероприятия</div>
                <button
                  onClick={() => console.log("+")}
                  className="add_type_event_create_event"
                >
                  <p>+</p>
                </button>
              </div>
              <div className="type_of_conduct">
                <SvgOnlineOffline></SvgOnlineOffline>
                <select
                  className="block_type_of_conduct"
                  defaultValue="default"
                >
                  <option disabled style={{ display: "none" }} value="default">
                    Тип проведения
                  </option>
                  <option value="online">Онлайн</option>
                  <option value="offline">Оффлайн</option>
                </select>
              </div>
              <div className="date_time_of_conduct">
                <SvgClock></SvgClock>
                <input
                  type="date"
                  placeholder="Дата проведения"
                  className="date_of_conduct"
                ></input>
                <input type="time" className="time_of_conduct"></input>
                <input type="time" className="duration_of_conduct"></input>
              </div>
            </div>
            <input
              className="link_event_create_event"
              placeholder="Ссылка на мероприятие"
            />
            <input
              className="link_video_create_event"
              placeholder="Добавить ссылку на видео"
            />
          </div>
          <div className="main_section_create_event_column">
            <div className="img_block_main_section">
              <button
                onClick={() => console.log("Добавить изображение")}
                className="add_img_main_section"
              >
                +
              </button>
              <p>Добавить изображение</p>
            </div>
          </div>
        </section>

        <section className="about_event_section_create_event">
          <h1>О мероприятии</h1>
          <textarea placeholder="Написать описание мероприятия"></textarea>
        </section>

        <section className="specialist_section_create_event">
          <h1>Специалист</h1>
          <div className="add_specialist_data">
            <div className="add_specialist_logo"></div>

            <div className="adds_specialist_inputs">
              <input
                placeholder="ФИО специалиста"
                className="add_name_number_mail_specialist"
              ></input>
              <textarea
                placeholder="Описание специалиста"
                className="add_description_specialist"
              ></textarea>
              <input
                placeholder="+7 (999) 999 - 99 - 99"
                className="add_name_number_mail_specialist"
              ></input>
              <input
                placeholder="email@example.ru"
                className="add_name_number_mail_specialist"
              ></input>
            </div>
            <div className="adds_specialist_materials_links">
              <p>Ссылки на материалы специалиста</p>
              <div className="circle_links">
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="btn_section_create_event">
          <button type="submit" className="btn_post_event">
            Опубликовать мероприятие
          </button>
        </section>
      </form>
      <div className="add_user">
        <div className="header_add_user">
          <p>Добавление пользователя</p>
          <div
            onClick={() => console.log("closed window")}
            className="svg_black_cross"
          >
            <svg
              width="46"
              height="47"
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
              className="input_add_user"
              type="text"
              placeholder="ФИО специалиста/сотрудника"
            />
            <input
              className="input_add_user"
              type="text"
              placeholder="Должность"
            />
            <select
              defaultValue="default_value_role"
              className="select_add_user"
              name="role"
              id=""
            >
              <option
                disabled
                style={{ display: "none" }}
                value="default_value_role"
              >
                Роль
              </option>
              <option value="user">Пользователь</option>
              <option value="event-manager">Ивент-менеджер</option>
              <option value="admin">Админ</option>
            </select>
            <input className="input_add_user" type="text" placeholder="Почта" />
            <input className="input_add_user" type="text" placeholder="TG" />
          </div>
        </div>
        <div className="add_user_btns">
          <button onClick={() => console.log("add")} className="btn_add_user">
            Добавить
          </button>
          <buttton
            onClick={() => console.log("cancel")}
            className="btn_cancel_add_user"
          >
            Отменить
          </buttton>
        </div>
      </div>
      <div className="window_notice">
        <div className="window_notice_header">
          <p>Уведомление</p>
        </div>
        <div className="unread_block">
          <div className="unread_header">
            <h2>Непрочитанные</h2>
            <button className="read_all">
              <p>ПРОЧИТАТЬ ВСЕ</p>
            </button>
          </div>
          <div className="unread_message_list">
            <div className="message">
              <div className="message_text">
                <p>
                  Через час будет мероприятие “Название мероприятия”, спикером
                  будет “Спикер” ещё
                </p>
              </div>
              <div className="message_time">
                <p>1 час назад</p>
              </div>
            </div>
          </div>
        </div>
        <div className="read_block">
          <div className="read_header">
            <h2>Прочитанные</h2>
          </div>
          <div className="read_message_list">
            <div className="message">
              <div className="message_text">
                <p>
                  Через час будет мероприятие “Название мероприятия”, спикером
                  будет “Спикер” ещё
                </p>ф
              </div>
              <div className="message_time">
                <p>1 час назад</p>
              </div>
            </div>
            <div className="message">
              <div className="message_text">
                <p>
                  Через час будет мероприятие “Название мероприятия”, спикером
                  будет “Спикер” ещё
                </p>
              </div>
              <div className="message_time">
                <p>1 час назад</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
