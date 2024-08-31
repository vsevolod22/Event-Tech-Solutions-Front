import React, { FC, useEffect, useState } from "react";
import "./eventDetailed.css";
import { useNavigate } from "react-router-dom";
import SvgOnlineOffline from "../../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../../svg/svg-clock/SvgCLock";
import SvgDuration from "../../svg/svg-duration/SvgDuration";
import Skeleton from "@mui/material/Skeleton";
import { IMeet } from "../../types/types.tsx";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";

interface EventDetailedProps {
  meet: IMeet | null;
}
const httpApiMethods = new HttpApiMethods();
const EventDetailed: FC<EventDetailedProps> = ({ meet }) => {
  const navigate_users_list = useNavigate();
  const [meetId, setMeetId] = useState<string | undefined>(meet?.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString("ru-RU", options); // Можно использовать locale-specific formatting
  };

  useEffect(() => {
    setMeetId(meet?.id);
  }, [meet]);
  const MeetReg = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMeetId(meet?.id);
    if (meetId) {
      try {
        const AllMeets = await httpApiMethods.PostUserMeetReg(meetId);
        console.log("Регистрация успешна:", AllMeets);
      } catch (error) {
        console.error("Ошибка при регистрации на мероприятие:", error);
      }
    } else {
      console.error("ID мероприятия не найден");
    }
  };

  return (
    <form className="event_detailed container">
      <div className="first_event_detailed">
        <h1>
          {meet && meet.name ? (
            meet.name
          ) : (
            <Skeleton variant="text" sx={{ fontSize: "1.667vw" }} />
          )}{" "}
        </h1>
        <div className="type_event">
          {meet && meet.type.name ? (
            meet.type.name
          ) : (
            <Skeleton variant="rounded" width="5.938vw" height="1.979vw" />
          )}
        </div>
        <div className="online_offline">
          <SvgOnlineOffline />
          <p>Онлайн</p>
        </div>
        <div className="count_month_year_time">
          <SvgClock />
          <p>
            {meet && meet.time_start ? (
              formatDate(meet.time_start)
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1.667vw" }} />
            )}
          </p>
        </div>
        <div className="event_duration">
          <SvgDuration />
          <p>
            {meet && meet.duration.hours ? (
              meet.duration.hours
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "0.833vw" }} />
            )}{" "}
          </p>
          <p>часа(-ов)</p>
        </div>
        <button onClick={MeetReg} className="sign_up_event_btn">
          ЗАПИСАТЬСЯ НА МЕРОПРИЯТИЕ
        </button>
        <button type="submit" className="link_event">
          Ссылка на мероприятие
        </button>
        <button type="submit" className="download_video_event">
          Скачать видео
        </button>

        {meet ? (
          <div
            onClick={() => navigate_users_list(`/users-list/meet/${meet.id}`)}
            className="list_users_event"
          >
            Список пользователей
          </div>
        ) : (
          <div className="list_users_event">Список пользователей</div>
        )}
      </div>
      <div className="second_event_detailed">
        {meet && meet.image ? (
          <img className="preview_img" src={meet.image} alt="previewIMG"></img>
        ) : (
          <div className="preview_img"></div>
        )}
        <div className="questions"></div>{" "}
        {/*component with question compoennt*/}
      </div>
    </form>
  );
};

export default EventDetailed;
