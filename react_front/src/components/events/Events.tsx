import React, { useState, useEffect } from "react";
import "./events.css";
import { Link } from "react-router-dom";
import Card from "../card/Card.tsx";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import { AllMeetings, IMeet } from "../../types/types.tsx";
const httpApiMethods = new HttpApiMethods();
const Events = function () {
  const [allMeets, setAllMeets] = useState<IMeet[] | null>(null);
  useEffect(() => {
    const getAllMeetings = async () => {
      const AllMeets = await httpApiMethods.GetAllMeetings();
      console.log(AllMeets);
      setAllMeets(AllMeets);
    };
    getAllMeetings();
  }, []);

  return (
    <div className="events">
      <div className="cards">
        <div className="card">
          <div className="image_content" style={{ background: `green` }}>
            <div className="status_card_event_green">Предстоящее</div>
            <div className="duration_card_event">
              <div className="text_duration_card_event"></div>
            </div>
          </div>
          <div className="description_content">
            <div className="description_content_statuses">
              <div className="type_status"></div>
              <div className="reg_event_green">Зарегистрирован</div>
            </div>

            <div className="description_content_text"></div>
            <div className="time_event"></div>
            <div className="time_event"></div>
          </div>
        </div>
        <div className="card">
          <div className="image_content" style={{ background: `green` }}>
            <div className="status_card_event_green">Предстоящее</div>
            <div className="duration_card_event">
              <div className="text_duration_card_event"></div>
            </div>
          </div>
          <div className="description_content">
            <div className="description_content_statuses">
              <div className="type_status"></div>
              <div className="reg_event_green">Зарегистрирован</div>
            </div>

            <div className="description_content_text"></div>
            <div className="time_event"></div>
            <div className="time_event"></div>
          </div>
        </div>
        <div className="card">
          <div className="image_content" style={{ background: `green` }}>
            <div className="status_card_event_green">Предстоящее</div>
            <div className="duration_card_event">
              <div className="text_duration_card_event"></div>
            </div>
          </div>
          <div className="description_content">
            <div className="description_content_statuses">
              <div className="type_status"></div>
              <div className="reg_event_green">Зарегистрирован</div>
            </div>

            <div className="description_content_text"></div>
            <div className="time_event"></div>
            <div className="time_event"></div>
          </div>
        </div>
        <div className="card">
          <div className="image_content" style={{ background: `green` }}>
            <div className="status_card_event_green">Предстоящее</div>
            <div className="duration_card_event">
              <div className="text_duration_card_event"></div>
            </div>
          </div>
          <div className="description_content">
            <div className="description_content_statuses">
              <div className="type_status"></div>
              <div className="reg_event_green">Зарегистрирован</div>
            </div>

            <div className="description_content_text"></div>
            <div className="time_event"></div>
            <div className="time_event"></div>
          </div>
        </div>
        <div className="card">
          <div className="image_content" style={{ background: `green` }}>
            <div className="status_card_event_green">Предстоящее</div>
            <div className="duration_card_event">
              <div className="text_duration_card_event"></div>
            </div>
          </div>
          <div className="description_content">
            <div className="description_content_statuses">
              <div className="type_status"></div>
              <div className="reg_event_green">Зарегистрирован</div>
            </div>

            <div className="description_content_text"></div>
            <div className="time_event"></div>
            <div className="time_event"></div>
          </div>
        </div>

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
