import React, { useState, useEffect } from "react";
import "./simpleFilter.css";
import InputFindEvent from "../../UI/input-find-event/InputFindEvent.tsx";

interface SimpleFilterProps {
  eventTypes: { id: number; name: string }[]; // Типы мероприятий
  onFilterChange: (filters: {
    type: string;
    isUpcoming: boolean | null;
  }) => void; // Функция для передачи фильтров
}

const SimpleFilter: React.FC<SimpleFilterProps> = ({
  eventTypes,
  onFilterChange,
}) => {
  const [selectedType, setSelectedType] = useState<string>(""); // Выбранный тип мероприятия
  const [isUpcoming, setIsUpcoming] = useState<string>(""); // По умолчанию показываем все мероприятия (и предстоящие, и завершенные)

  // Функция для передачи изменений фильтра в родительский компонент
  const handleFilterChange = () => {
    console.log(isUpcoming);
    if (isUpcoming === "") {
      onFilterChange({ type: selectedType, isUpcoming: null });
    } else if (isUpcoming === "true") {
      onFilterChange({ type: selectedType, isUpcoming: true });
    } else if (isUpcoming === "false") {
      onFilterChange({ type: selectedType, isUpcoming: false });
    }
  };

  // Добавляем useEffect, чтобы отслеживать изменения и обновлять фильтры
  useEffect(() => {
    handleFilterChange();
  }, [selectedType, isUpcoming]); // Вызываем handleFilterChange при изменении selectedType и isUpcoming

  return (
    <div className="simple_filter">
      <InputFindEvent />
      <div className="selects">
        <select
          name="actuale_select"
          value={isUpcoming}
          onChange={(e) => setIsUpcoming(e.target.value)} // Обновляем только состояние, handleFilterChange сработает через useEffect
          className="actuale_select"
        >
          <option value="">Все мероприятия</option>
          <option value="true">Предстоящие</option>
          <option value="false">Завершенные</option>
        </select>

        <select
          name="type_event_select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)} // Обновляем только состояние, handleFilterChange сработает через useEffect
          className="type_event_select"
        >
          <option value="">Все типы</option>
          {eventTypes.map((type) => (
            <option value={type.id.toString()} key={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SimpleFilter;
