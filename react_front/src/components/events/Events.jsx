import React, { useState } from "react";
import "./events.css";
import Card from "../card/Card.jsx";

const Events = function () {
  const [dataCards, setDataCards] = useState([
    {
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
      user_state: 0,
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
    },
    {
      id: 2,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 3,
      name: "SportImg",
      place: "sportplace",
      time_start: "2024-04-14T17:20:28+03:00",
      time_end: "2024-04-14T17:20:27+03:00",
      duration: {
        hours: -1,
        minutes: 59,
        seconds: 59,
      },
      is_upcoming: false,
      user_state: -1,
      reference: "ref",
      reference_video: "ref",
      type: "Sport",
      speaker: {
        id: 1,
        username: "admin",
        first_name: "",
        last_name: "",
        avatar: null,
      },
      managers: [],
      participants: [],
      image:
        "http://localhost:8000/media/events/2024/04/14/2024-04-13_23-30-56_Ns01PdK.png",
    },
    {
      id: 4,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 5,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: 2,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 6,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 7,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 8,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
    {
      id: 9,
      name: "sport",
      place: "place",
      time_start: "2024-04-13T22:10:19+03:00",
      time_end: "2024-04-14T22:10:20+03:00",
      duration: {
        hours: 24,
        minutes: 0,
        seconds: 1,
      },
      is_upcoming: true,
      user_state: -1,
      reference: "erer",
      reference_video: "erere",
      type: "Sport",
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
    },
  ]);
  const [data, setData] = useState(null);
  console.log(dataCards);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.get("http://localhost:8000/api/user/");
  //       setData(response.data);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div className="events">
      <div className="cards">
        {dataCards &&
          dataCards.map((card) => <Card dataCard={card} key={card.id} />)}
      </div>
    </div>
  );
};

export default Events;
