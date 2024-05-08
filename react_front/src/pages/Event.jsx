import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { HttpApiMethods } from '../components/utils/FetchUtils.tsx';
import axios from "axios";
import Specialist from "../components/specialist/Specialist";
import AboutEvent from "../components/about-event/AboutEvent";
import InputComment from "../components/input-comment/InputComment";
import Commentlist from "../components/comment-list/CommentList";
import EventDetailed from "../components/event-detailed/EventDetailed";
const httpApiMethods = new HttpApiMethods()
function Event({ user }) {
  const { id } = useParams();
  const [meet, setMeet] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getMeet = async (id) => {
    
      const newMeet = await httpApiMethods.GetMeetingById(id)
      console.log(newMeet);
      setMeet(newMeet);
        
        

    };
    const getComments = async (id) => {
    
      const newComments = await httpApiMethods.GetCommentsByMeet(id)
      console.log(newComments);
      setComments(newComments);
        
        

    };
    getMeet(id);
    getComments(id);

  }, [id]);

  return (
    <>
      <Header user={user} />
      <EventDetailed meet={meet} />
      <AboutEvent meet={meet} />
      <Specialist meet={meet} />
      <InputComment meet={meet} comments={comments} />
    </>
  );
}

export default Event;
