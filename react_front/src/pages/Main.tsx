import React, { useState } from "react";
import Header from "../components/header/Header.tsx";
import Login from "../components/login-window/Login.tsx";
import MainContent from "../components/main-content/MainContent.tsx";
import HardFilter from "../components/filters/hard-filter/HardFilter.tsx";
import Events from "../components/events/Events.tsx";
import { IType, IMeet } from "../types/types";
import SuccessfulyReg from "../components/successfully-reg/SuccessfulyReg.jsx";

interface MainProps {
  user: {
    role: number;
    reg: number;
  };
}

const Main: React.FC<MainProps> = ({ user }) => {
  const [modal, setModal] = useState<number>(0);
  const [filters, setFilters] = useState<{ type: string; isUpcoming: boolean }>(
    {
      type: "",
      isUpcoming: true,
    }
  );
  const [eventTypes, setEventTypes] = useState<IType[]>([]);
  const [totalEvents, setTotalEvents] = useState<number>(0); // Добавлен стейт для общего количества мероприятий

  const getValueModal = (data: number) => setModal(data);

  return (
    <>
      <Header getData={getValueModal} />
      <Login getData={getValueModal} visible={modal} setVisible={setModal} />
      <MainContent />
      <HardFilter
        totalEvents={totalEvents} // Передаем общее количество мероприятий
        eventTypes={eventTypes} // Передаем типы мероприятий
        onFilterChange={setFilters} // Передаем функцию для изменения фильтров
      />
      <Events
        filters={filters}
        onTypesExtracted={setEventTypes}
        setTotalEvents={setTotalEvents} // Передаем функцию для установки общего количества мероприятий
      />
    </>
  );
};

export default Main;
