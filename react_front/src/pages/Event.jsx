import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Specialist from "../components/specialist/Specialist";
import AboutEvent from "../components/about-event/AboutEvent";
import InputComment from "../components/input-comment/InputComment";
import Commentlist from "../components/comment-list/CommentList";
import EventDetailed from "../components/event-detailed/EventDetailed";

function Event({ user }) {
  const { id } = useParams();
  const [componentData, setComponentData] = useState({
    id: 1,
    name: "DANCE",
    place: "KLUB",
    time_start: "2024-04-13T22:10:19+03:00",
    time_end: "2024-04-14T22:10:20+03:00",
    duration: {
      hours: 1,
      minutes: 0,
      seconds: 1,
    },
    is_upcoming: false,
    user_state: -1,
    reference: "erer",
    reference_video: "erere",
    type: "Musci",
    speaker: {
      id: 1,
      username: "admin",
      first_name: "",
      last_name: "",
      avatar: null,
    },
    managers: [
      {
        id: 2,
        username: "user1",
        first_name: "user1",
        last_name: "user1",
        avatar: "http://localhost:8000/media/Lord_Palmerston_1855.jpg",
      },
    ],
    participants: [
      {
        id: 2,
        username: "user1",
        first_name: "user1",
        last_name: "user1",
        avatar: "http://localhost:8000/media/Lord_Palmerston_1855.jpg",
      },
    ],
    image: null,
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`/api/events/event/${id}`);
  //     setComponentData(response.data);
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <>
      <Header user={user} />
      <EventDetailed />
      <AboutEvent />
      <Specialist specialistData={componentData.speaker} />
      <InputComment />
      <Commentlist />
    </>
  );
}

export default Event;
