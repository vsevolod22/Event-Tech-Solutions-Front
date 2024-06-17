import React, { useState } from "react";
import "./noticeModal.css";

const NoticeModal = function ({ noticeModalRef }) {
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
              </p>
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
  );
};

export default NoticeModal;
