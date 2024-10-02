import React, { useState, useEffect } from "react";
import "./events.css";
import { Link } from "react-router-dom";
import Card from "../card/Card.tsx";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import { AllMeetings, IMeet } from "../../types/types.tsx";
const Events = function () {
  const [allMeets, setAllMeets] = useState<IMeet[] | null>(null);
  const [showMore, setShowMore] = useState(false); // Состояние для показа всех элементов

  useEffect(() => {
    const getAllMeetings = async () => {
      const httpApiMethods = new HttpApiMethods();
      const AllMeets = await httpApiMethods.GetAllMeetings();
      console.log(AllMeets);
      setAllMeets(AllMeets);
    };
    getAllMeetings();
  }, [localStorage.getItem("token")]);

  const renderCards = () => {
    if (showMore) {
      return allMeets?.map((card) => <Card dataCard={card} key={card.id} />);
    } else {
      // return allMeets.slice(0, 6).map((card) => <Card dataCard={card} key={card.id} />);
      return 0;
    }
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // МАКСИМУМ ПОКАЗЫВАТЬ 6 МЕРОПРИЯТИЙ, ПОСЛЕ НАЖАТИЯ на показать все показывать все
  return (
    <div className="events">
      <div className="cards">
        {renderCards()} {/* Вызываем функцию для отрисовки карточек */}
      </div>
      <button className="events__all" onClick={handleShowMore}>
        <p>Все мероприятия</p>
      </button>
    </div>
  );
};

export default Events;
