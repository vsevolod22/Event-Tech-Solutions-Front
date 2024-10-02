import React from "react";
import "./hardFilter.css";
import SimpleFilter from "../simple-filter/SimpleFilter.tsx";

interface HardFilterProps {
  totalEvents: number; // Количество мероприятий
  eventTypes: { id: number; name: string }[]; // Типы мероприятий
  onFilterChange: (filters: { type: string; isUpcoming: boolean }) => void; // Функция для обработки изменений фильтров
}

const HardFilter: React.FC<HardFilterProps> = ({
  totalEvents,
  eventTypes,
  onFilterChange,
}) => {
  return (
    <div className="hard_filter container">
      <SimpleFilter eventTypes={eventTypes} onFilterChange={onFilterChange} />
      <div className="count_select">
        <p>{totalEvents} мероприятий</p>{" "}
        {/* Динамическое количество мероприятий */}
      </div>
    </div>
  );
};

export default HardFilter;
