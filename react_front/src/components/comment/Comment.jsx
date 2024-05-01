import React, { useState } from "react";
import "./comment.css";

const Comment = function () {
  return (
    <div className="comment_block">
      <div className="logo_profile"></div>
      <div className="data_comment">
        <div className="name_date">
          <div className="name">
            <p>Световой Владислав</p>
          </div>
          <div className="date">
            <p>4 мая 1990, 00:00</p>
          </div>
        </div>
        <div className="comm">
          <p>
            Выражаю огромную благодарность организатору за организацию столь
            нужного и полезного мероприятия. И приглашение меня. Уверен, данное
            мероприятие очень полезно как для начинающих, так и для опытных
            предпринимателей. Много получено полезных и нужных знакомств и
            контактов, столь необходимых в бизнесе, предпринимательской работе и
            деятельности.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
