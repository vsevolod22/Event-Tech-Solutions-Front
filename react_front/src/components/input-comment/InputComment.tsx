import React, {FC, useEffect, useState} from "react";
import "./inputComment.css";
import {IComment} from "../../types/types.tsx";
import {HttpApiMethods} from "../utils/FetchUtils.tsx";
interface InputCommentProps {

  id: string | undefined
}



const InputComment : FC<InputCommentProps> =  ({id}) => {
  const httpApiMethods = new HttpApiMethods()
  const [textAreaValue, setTextAreaValue] = useState('');
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [newComment, setNewComment] = useState<IComment | null>(null);
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
  useEffect(() => {
    if (id) {
      const getComments = async (id : string) => {

        const newComments = await httpApiMethods.GetCommentsByMeet(id)
        console.log(newComments);
        setComments(newComments);



      };
      getComments(id);
    }

  }, [comments, newComment ])
  const handleComment = async () => {
    console.log(id)
    if (id) {
      try {
        const response = await httpApiMethods.PostComment(textAreaValue, id)
        console.log(response);
        if (response) {
          setNewComment(response)
        }


      } catch (error) {
        console.error(error);
      }
    }

  }
  return (
    <section className="inputCommMargin">
      <form onSubmit={handleComment} className="input_comm_block container">
        <h1>Комментарии</h1>
        <p>Количество комментариев: {comments && comments.length}</p>
        <div className="comment">
          <div className="logo_profile"></div>
          <textarea
            className="area_comment"
            placeholder={`Оставьте комментарий`}
            value={textAreaValue} // Установите значение как состояние
            onChange={(e) => setTextAreaValue(e.target.value)}
          ></textarea>
        </div>
        <div className="button_post">
          <button type="submit">
            <p>отправить</p>
          </button>
        </div>
      </form>
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
