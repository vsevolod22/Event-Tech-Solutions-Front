import React, {FC} from "react";
import "./inputComment.css";
import {IComment} from "../../types/types.tsx";

interface InputCommentProps {
  comments: IComment[] | null
}



const InputComment : FC<InputCommentProps> =  ({comments}) => {
  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    const options : Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',

    };
    return date.toLocaleString('ru-RU', options); // Можно использовать locale-specific formatting
  };
  return (
    <section className="inputCommMargin">
      <div className="input_comm_block container">
        <h1>Комментарии</h1>
        <p>Количество комментариев: {comments && comments.length}</p>
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
       
       {comments && comments.map((comment) => (
          <div key={comment.id} className="comment_block">
          <div className="logo_profile"></div>
            <div className="data_comment">
              <div className="name_date">
                <div className="name">
                  <p>{comment.user.last_name} {comment.user.first_name}</p>
                </div>
                <div className="date">
                  <p>{formatDate(comment.created_at)}</p>
                </div>
              </div>
              <div className="comm">
                <p>
                 {comment.comment}
                </p>
              </div>
            </div>
        </div>
       ))}
        
      </div>
    </section>
   
    
  );
};

export default InputComment;
