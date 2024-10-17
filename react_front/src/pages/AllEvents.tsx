import React, { useState } from "react";
import Events from "../components/events/Events.tsx";
import { Margin } from "@mui/icons-material";
import Header from "../components/header/Header.tsx";
import "./allEvent.css";
import Hardfilter from "../components/filters/hard-filter/HardFilter.tsx";
import { Link } from "react-router-dom";
import Login from "../components/login-window/Login.tsx";

const AllEvents = () => {
  const [modal, setModal] = useState(0);
  const [filters, setFilters] = useState<{ type: string; isUpcoming: boolean }>(
    {
      type: "",
      isUpcoming: null,
    }
  );
  const [eventTypes, setEventTypes] = useState<IType[]>([]);
  const [totalEvents, setTotalEvents] = useState<number>(0); // Добавлен стейт для общего количества мероприятий
  const getValueModal = (data: number) => {
    setModal(data);
  };
  return (
    <>
      <Header getData={getValueModal} />
      <Login getData={getValueModal} visible={modal} setVisible={setModal} />
      {/* data for header */}
      <div className="all-events container">
        <Link to="/create-event">
          <button className="all-events__create-button">
            Создать мероприятие
          </button>
        </Link>
        <Events
          filters={filters}
          onTypesExtracted={setEventTypes}
          setTotalEvents={setTotalEvents}
        />
        {/* <Hardfilter /> */}
        {/* <div className="all-events__list"> */}
        {/* {allMeets &&


    allMeets.map((card) => <Card dataCard={card} key={card.id} />)} */}
        {/* </div> */}
      </div>
    </>
  );
};
export default AllEvents;
