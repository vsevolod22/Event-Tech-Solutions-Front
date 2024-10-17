import React, { FC } from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import SvgDurationCardEvent from "../../svg/svg-duration-card-event/SvgDurationCardEvent";
import { IMeet } from "../../types/types.tsx";

interface CardProps {
  dataCard: IMeet;
}

const Card: FC<CardProps> = function ({ dataCard }) {
  const navigate = useNavigate();
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

  return (
    <div onClick={() => navigate(`/event/${dataCard.id}`)} className="card">
      <div
        className="image_content"
        style={{ background: `url(${dataCard.image})` }}
      >
        {dataCard.is_upcoming ? (
          <div className="status_card_event_green">Предстоящее</div>
        ) : (
          <div className="status_card_event_red">Завершено</div>
        )}
        <div className="duration_card_event">
          <div className="text_duration_card_event">
            {dataCard.duration.hours}
          </div>
          <SvgDurationCardEvent />
        </div>
      </div>
      <div className="description_content">
        <div className="description_content_statuses">
          <div className="type_status">{dataCard.type.name}</div>
          {dataCard.user_state !== -1 ? (
            <div className="reg_event_green">Зарегистрирован</div>
          ) : (
            <div className="reg_event_red">Не зарегистрирован</div>
          )}
        </div>

        <div className="description_content_text">{dataCard.name}</div>
        <div className="time_event">{formatDate(dataCard.time_start)}</div>
        <div className="time_event">{formatDate(dataCard.time_end)}</div>
      </div>
    </div>
  );
};

export default Card;
