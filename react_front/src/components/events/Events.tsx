import React, { useState, useEffect } from "react";
import "./events.css";
import { Link } from "react-router-dom";
import Card from "../card/Card.tsx";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import { AllMeetings, IMeet } from "../../types/types.tsx";
const Events = function () {
  const [allMeets, setAllMeets] = useState<IMeet[] | null>(null);

  useEffect(() => {
    const getAllMeetings = async () => {
      const httpApiMethods = new HttpApiMethods();
      const AllMeets = await httpApiMethods.GetAllMeetings();
      console.log(AllMeets);
      setAllMeets(AllMeets);
    };
    getAllMeetings();
  }, [localStorage.getItem("token")]);

  return (
    <div className="events">
      <div className="cards">
        {allMeets &&
          allMeets.map((card) => <Card dataCard={card} key={card.id} />)}
      </div>
      <button className="events__all">
        <p>Все мероприятия</p>
      </button>
    </div>
  );
};

export default Events;
