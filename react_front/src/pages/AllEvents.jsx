import React from "react";
import Events from "../components/events/Events";
import { Margin } from "@mui/icons-material";
import Header from "../components/header/Header.tsx";
import "./allEvent.css";
import Hardfilter from "../components/filters/hard-filter/HardFilter.tsx";
import { Link } from "react-router-dom";

const AllEvents = () => {
  return (
    <>
      <Header />
      {/* data for header */}
      <div className="all-events container">
        <Link to="/create-event">
          <button className="all-events__create-button">
            Создать мероприятие
          </button>
        </Link>
        <Hardfilter />
        <div className="all-events__list">
          {/* {allMeets &&


    allMeets.map((card) => <Card dataCard={card} key={card.id} />)} */}
        </div>
      </div>
    </>
  );
};
export default AllEvents;
