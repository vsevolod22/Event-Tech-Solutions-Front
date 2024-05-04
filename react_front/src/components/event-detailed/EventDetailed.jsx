import React from "react";
import "./eventDetailed.css";
import { useNavigate } from "react-router-dom";
import SvgOnlineOffline from "../../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../../svg/svg-clock/SvgCLock";
import SvgDuration from "../../svg/svg-duration/SvgDuration";

const EventDetailed = function () {
  const navigate_users_list = useNavigate();

  return (
    <form className="event_detailed container">
      <div className="first_event_detailed">
        <h1>Интерактивная лекция "Питание для Работоспособности"</h1>
        <div className="type_event">Психология</div>
        <div className="online_offline">
          <SvgOnlineOffline />
          <p>Онлайн</p>
        </div>
        <div className="count_month_year_time">
          <SvgClock />
          <p>23 декабря 2023 года, 15:00</p>
        </div>
        <div className="event_duration">
          <SvgDuration />
          <p>2 часа</p>
        </div>
        <button type="submit" className="sign_up_event_btn">
          ЗАПИСАТЬСЯ НА МЕРОПРИЯТИЕ
        </button>
        <div type="submit" className="link_event">
          Ссылка на мероприятие
        </div>
        <button type="submit" className="download_video_event">
          Скачать видео
        </button>
        <div
          onClick={() => navigate_users_list("/users-list")}
          className="list_users_event"
        >
          Список пользователей
        </div>
      </div>
      <div className="second_event_detailed">
        <div className="preview_img"></div>
        <div className="questions"></div>{" "}
        {/*component with question compoennt*/}
      </div>
    </form>
  );
};

export default EventDetailed;
