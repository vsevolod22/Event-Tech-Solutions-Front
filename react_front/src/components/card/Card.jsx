import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = function ({ dataCard }) {
  const navigate = useNavigate();
  console.log(dataCard)
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
    <div onClick={() => navigate(`/event/${dataCard.id}`)} className="card">
      <div className="image_content"
        style={{background: `url(${dataCard.image})`}}>
        {dataCard.is_upcoming ? (
          <div className="status_card_event_green">Предстоящее</div>
        ) : (
          <div className="status_card_event_red">Завершено</div>
        )}
        <div className="duration_card_event">
          <div className="text_duration_card_event">
            {dataCard.duration.hours}
          </div>
          <div className="svg_duration_card_event">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0375 1.50859H11.6631V0H0.337891V1.50859H0.963477V1.90006C0.963477 4.35771 1.80456 6.61175 3.18983 7.94904C1.80456 9.28659 0.963477 11.5404 0.963477 13.9982V14.4914H0.337891V16H11.6631V14.4914H11.0375V13.9982C11.0375 11.5404 10.1963 9.28662 8.81122 7.94904C10.1963 6.61175 11.0375 4.3581 11.0375 1.90006V1.50859ZM7.75612 7.55552L7.23668 7.94904L7.75612 8.34256C9.05238 9.32557 9.92241 11.3159 10.0373 13.5044H1.96393C2.07875 11.3161 2.94839 9.32579 4.24504 8.34256L4.7642 7.94904L4.24504 7.55552C2.9486 6.5724 2.07875 4.58234 1.96393 2.39388H10.037C9.92241 4.58234 9.05235 6.5724 7.75612 7.55552ZM3.00472 3.17859H8.99619C8.90958 4.84025 8.24877 6.35162 7.26379 7.09805C7.26379 7.09805 7.09514 7.17088 6.86992 7.39664C6.40395 8.06206 6.3791 10.4944 6.37832 10.6016C6.71287 10.6373 7.07431 10.7785 7.43251 11.1057C8.6963 12.2604 9.06299 12.3965 9.10709 13.2348H3.18134C3.2254 12.3968 3.94441 11.797 4.85582 11.1057C4.85582 11.1057 5.28942 10.7251 5.89759 10.6195C5.88652 10.6004 5.88003 10.5875 5.88003 10.5875C5.88003 8.29649 5.131 7.31411 5.131 7.31411L4.59858 7.01553C3.61392 6.2686 3.09162 4.84028 3.00472 3.17859Z"
                fill="#FFDD00"
              />
            </svg>
          </div>
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
