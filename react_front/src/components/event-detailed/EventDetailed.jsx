import React from "react";
import "./eventDetailed.css";
import { useNavigate } from "react-router-dom";
import SvgOnlineOffline from "../../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../../svg/svg-clock/SvgCLock";
import SvgDuration from "../../svg/svg-duration/SvgDuration";
import Skeleton from '@mui/material/Skeleton';
const EventDetailed = function ({meet}) {
  const navigate_users_list = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',

    };
    return date.toLocaleString('ru-RU', options); // Можно использовать locale-specific formatting
  };

  return (
    <form className="event_detailed container">
      <div className="first_event_detailed">
        <h1>{meet && meet.name ? meet.name : <Skeleton variant="text" sx={{ fontSize: '32px' }} />} </h1>
        <div className="type_event">{meet && meet.type.name ? meet.type.name : <Skeleton variant="rounded" width={114} height={38} />}</div>
        <div className="online_offline">
          <SvgOnlineOffline />
          <p>Онлайн</p>
        </div>
        <div className="count_month_year_time">
           <SvgClock />
          <p>{meet && meet.time_start ? formatDate(meet.time_start) : <Skeleton variant="text" sx={{ fontSize: '32px' }} />}</p>
        </div>
        <div className="event_duration">
           <SvgDuration />
          <p>{meet && meet.duration.hours ? meet.duration.hours : <Skeleton variant="text" sx={{ fontSize: '16px' }} />}</p>

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
