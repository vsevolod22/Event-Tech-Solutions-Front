import React from "react";
import Events from "../components/events/Events";
import { Margin } from "@mui/icons-material";
import Header from "../components/header/Header.tsx";
import "./allEvent.css";
import Hardfilter from "../components/filters/hard-filter/HardFilter.tsx";

const AllEvents = () => {
  return (
    <>
      {" "}
      <Header />
      {/* data for header */}
      <div className="all-events container">
        <button className="all-events__create-button">
          Создать мероприятие
        </button>
        <Hardfilter />

        {/* {allMeets &&
    allMeets.map((card) => <Card dataCard={card} key={card.id} />)} */}
      </div>
    </>
  );
};
export default AllEvents;
