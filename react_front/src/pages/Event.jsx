import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { HttpApiMethods } from "../components/utils/FetchUtils";
import axios from "axios";
import Specialist from "../components/specialist/Specialist";
import AboutEvent from "../components/about-event/AboutEvent";
import InputComment from "../components/input-comment/InputComment";
import Commentlist from "../components/comment-list/CommentList";
import EventDetailed from "../components/event-detailed/EventDetailed";
import Login from "../components/login-window/Login";
import Events from "../components/events/Events";
const httpApiMethods = new HttpApiMethods();
function Event({ user }) {
  const { id } = useParams();
  const [meet, setMeet] = useState(null);

  useEffect(() => {
    const getMeet = async (id) => {
      const newMeet = await httpApiMethods.GetMeetingById(id);
      console.log(newMeet);
      setMeet(newMeet);
    };
    getMeet(id);
  }, [id]);

  return (
    <>
      <Header user={user} />
      <Login></Login>
      <EventDetailed meet={meet} />
      <AboutEvent meet={meet} />
      <Specialist meet={meet} />
      <InputComment meet={meet} />
      <h1>Ещё меропрития</h1>
      <Events />
    </>
  );
}

export default Event;
