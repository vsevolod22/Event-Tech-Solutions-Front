import React, { useState, useEffect } from "react";
import "./events.css";
import Card from "../card/Card.tsx";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import { IMeet } from "../../types/types";

interface EventsProps {
  filters: { type: string; isUpcoming: boolean | null }; // Фильтры включают тип и актуальность (null означает "все")
  onTypesExtracted: (types: { id: number; name: string }[]) => void; // Передача типов мероприятий в Main
  setTotalEvents: (total: number) => void; // Передача общего количества мероприятий
}

const Events: React.FC<EventsProps> = ({
  filters,
  onTypesExtracted,
  setTotalEvents,
}) => {
  const [allMeets, setAllMeets] = useState<IMeet[]>([]);
  const [filteredMeets, setFilteredMeets] = useState<IMeet[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const httpApiMethods = new HttpApiMethods();
      const meets = await httpApiMethods.GetAllMeetings();
      setAllMeets(meets);
      setTotalEvents(meets.length); // Устанавливаем общее количество мероприятий

      // Извлекаем уникальные типы из мероприятий и передаем их в SimpleFilter через Main
      const uniqueTypes = Array.from(new Set(meets.map((meet) => meet.type.id)))
        .map((typeId) => meets.find((meet) => meet.type.id === typeId)?.type)
        .filter(
          (type): type is { id: number; name: string } => type !== undefined
        );

      onTypesExtracted(uniqueTypes);
    };
    fetchEvents();
  }, [setTotalEvents, onTypesExtracted]);

  useEffect(() => {
    // Фильтрация мероприятий по типу и актуальности
    const filtered = allMeets.filter((meet) => {
      const matchType = filters.type
        ? meet.type.id.toString() === filters.type
        : true;
      const matchUpcoming =
        filters.isUpcoming === null || meet.is_upcoming === filters.isUpcoming;
      return matchType && matchUpcoming;
    });
    setFilteredMeets(filtered);
  }, [allMeets, filters]);

  const renderCards = () => {
    const meetsToShow = showMore ? filteredMeets : filteredMeets.slice(0, 6);
    return meetsToShow.map((card) => <Card dataCard={card} key={card.id} />);
  };

  return (
    <div className="events">
      <div className="cards">{renderCards()}</div>
      {filteredMeets.length > 6 && (
        <button className="events__all" onClick={() => setShowMore(!showMore)}>
          <p>{showMore ? "Скрыть мероприятия" : "Все мероприятия"}</p>
        </button>
      )}
    </div>
  );
};

export default Events;
