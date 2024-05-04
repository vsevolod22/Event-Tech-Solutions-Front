import React from "react";
import "./inputComment.css";

const InputComment = function () {
  return (
    <section>
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
      <div className="container comment_list">
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
        
      </div>
    </section>
   
    
  );
};

export default InputComment;
