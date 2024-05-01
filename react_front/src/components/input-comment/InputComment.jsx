import React from "react";
import "./inputComment.css";

const InputComment = function () {
  return (
    <div className="input_comm_block container">
      <h1>Комментарии</h1>
      <p>{/* кол-во мероприятий */}3 КОММЕНТАРИЯ</p>
      <div className="comment">
        <div className="logo_profile"></div>
        <textarea
          className="area_comment"
          placeholder={`Ваше слово, `}
        ></textarea>
      </div>
      <div className="button_post">
        <button>
          <p>отправить</p>
        </button>
      </div>
    </div>
  );
};

export default InputComment;
