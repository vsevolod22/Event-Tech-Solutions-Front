import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { HttpApiMethods } from "../utils/FetchUtils";
import { INotification } from "../../types/types";
import "./noticeModal.css";

const NoticeModal = function ({ noticeModalRef }) {
  const [notifications, setNotifications] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      const httpApiMethods = new HttpApiMethods();
      const notificationsData = await httpApiMethods.GetNotifications();
      setNotifications(notificationsData);
      setLoading(false); // Отключаем режим загрузки после получения данных
      console.log(notificationsData);
    };

    fetchNotifications();
  }, []);

  // Разделение уведомлений на прочитанные и непрочитанные
  const unreadNotifications =
    notifications?.filter((notification) => notification.state === 0) || [];
  const readNotifications =
    notifications?.filter((notification) => notification.state !== 0) || [];

  // Функция для обработки клика по уведомлению
  const handleNotificationClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div ref={noticeModalRef} className="window_notice">
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
          {loading ? (
            <>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </>
          ) : unreadNotifications.length > 0 ? (
            unreadNotifications.map((notification) => (
              <div
                className="message"
                key={notification.time}
                onClick={() => handleNotificationClick(notification.event.id)}
              >
                <div className="message_text">
                  <p>{notification.description}</p>
                </div>
                <div className="message_time">
                  <p>{new Date(notification.time).toLocaleTimeString()}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Нет непрочитанных уведомлений</p>
          )}
        </div>
      </div>
      <div className="read_block">
        <div className="read_header">
          <h2>Прочитанные</h2>
        </div>
        <div className="read_message_list">
          {loading ? (
            <>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </>
          ) : readNotifications.length > 0 ? (
            readNotifications.map((notification) => (
              <div
                className="message"
                key={notification.time}
                onClick={() => handleNotificationClick(notification.event.id)}
              >
                <div className="message_text">
                  <p>{notification.description}</p>
                </div>
                <div className="message_time">
                  <p>{new Date(notification.time).toLocaleTimeString()}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Нет прочитанных уведомлений</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
