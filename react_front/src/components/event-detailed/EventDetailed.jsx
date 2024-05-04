import React from "react";
import "./eventDetailed.css";
import Skeleton from '@mui/material/Skeleton';
const EventDetailed = function ({meet}) {
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
    <div className="event_detailed container">
      <div className="first_event_detailed">
        <h1>{meet && meet.name ? meet.name : <Skeleton variant="text" sx={{ fontSize: '32px' }} />} </h1>
        <div className="type_event">{meet && meet.type.name ? meet.type.name : <Skeleton variant="rounded" width={114} height={38} />}</div>
        <div className="online_offline">
          <div className="svg_online_offline">
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              href="http://www.w3.org/1999/xlink"
            >
              <rect width="30" height="26" fill="url(#pattern0_378_496)" />
              <defs>
                <pattern
                  id="pattern0_378_496"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_378_496"
                    transform="matrix(0.00866667 0 0 0.01 0.0666667 0)"
                  />
                </pattern>
                <image
                  id="image0_378_496"
                  width="100"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>Онлайн</p>
        </div>
        <div className="count_month_year_time">
          <div className="svg_clock">
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              href="http://www.w3.org/1999/xlink"
            >
              <rect width="30" height="26" fill="url(#pattern0_378_499)" />
              <defs>
                <pattern
                  id="pattern0_378_499"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_378_499"
                    transform="matrix(0.00866667 0 0 0.01 0.0666667 0)"
                  />
                </pattern>
                <image
                  id="image0_378_499"
                  width="100"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>{meet && meet.time_start ? formatDate(meet.time_start) : <Skeleton variant="text" sx={{ fontSize: '32px' }} />}</p>
        </div>
        <div className="event_duration">
          <div className="svg_duration">
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9506 2.21798H19V0H0V2.21798H1.04953V2.79355C1.04953 6.40688 2.4606 9.72084 4.78464 11.687C2.4606 13.6535 1.04953 16.9672 1.04953 20.5807V21.3059H0V23.5238H19V21.3059H17.9506V20.5807C17.9506 16.9672 16.5393 13.6535 14.2155 11.687C16.5393 9.72084 17.9506 6.40745 17.9506 2.79355V2.21798ZM12.4454 11.1084L11.574 11.687L12.4454 12.2656C14.6201 13.7108 16.0797 16.6371 16.2725 19.8547H2.72798C2.92061 16.6374 4.37958 13.7111 6.55494 12.2656L7.42592 11.687L6.55494 11.1084C4.37993 9.663 2.92061 6.73713 2.72798 3.51957H16.272C16.0797 6.73713 14.6201 9.663 12.4454 11.1084ZM4.47409 4.67329H14.5259C14.3805 7.11632 13.2719 9.33839 11.6194 10.4358C11.6194 10.4358 11.3365 10.5429 10.9586 10.8748C10.1769 11.8532 10.1352 15.4292 10.1339 15.5869C10.6952 15.6394 11.3016 15.847 11.9025 16.328C14.0227 18.0257 14.6379 18.2259 14.7119 19.4583H4.77039C4.84432 18.2262 6.05058 17.3444 7.57963 16.328C7.57963 16.328 8.30708 15.7685 9.32739 15.6133C9.30882 15.5852 9.29794 15.5662 9.29794 15.5662C9.29794 12.1978 8.04129 10.7535 8.04129 10.7535L7.14807 10.3145C5.49612 9.21634 4.61987 7.11637 4.47409 4.67329Z"
                fill="#090909"
              />
            </svg>
          </div>
          <p>{meet && meet.duration.hours ? meet.duration.hours : <Skeleton variant="text" sx={{ fontSize: '16px' }} />}</p>
        </div>
        <div className="sign_up_event_btn">ЗАПИСАТЬСЯ НА МЕРОПРИЯТИЕ</div>
        <div className="link_event">Ссылка на мероприятие</div>
        <div className="download_video_event">Скачать видео</div>
        <div className="list_users_event">Список пользователей</div>
      </div>
      <div className="second_event_detailed">
        <div className="preview_img"></div>
        <div className="questions"></div>{" "}
        {/*component with question compoennt*/}
      </div>
    </div>
  );
};

export default EventDetailed;
