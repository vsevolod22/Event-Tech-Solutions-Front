import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import SvgDurationCardEvent from "../../svg/svg-duration-card-event/SvgDurationCardEvent";

const Card = function ({ dataCard }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/event/${dataCard.id}`)} className="card">
      <div className="image_content">
        {/* style={{background: `url(${dataCard.image})`}}> */}
        {dataCard.is_upcoming ? (
          <div className="status_card_event_green">Предстоящее</div>
        ) : (
          <div className="status_card_event_red">Завершено</div>
        )}
        <div className="duration_card_event">
          <div className="text_duration_card_event">
            {dataCard.duration.hours}
          </div>
     <SvgDurationCardEvent/>
        </div>
      </div>
      <div className="description_content">
        <div className="description_content_statuses">
          <div className="type_status">{dataCard.type}</div>
          {dataCard.user_state !== -1 ? (
            <div className="reg_event_green">Зарегистрирован</div>
          ) : (
            <div className="reg_event_red">Не зарегистрирован</div>
          )}
        </div>

        <div className="description_content_text">{dataCard.name}</div>
        <div className="time_event">23 декабря, 15:00 </div>
      </div>
    </div>
  );
};

export default Card;
