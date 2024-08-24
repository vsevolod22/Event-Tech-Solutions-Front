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
        <div className="all-events__list">
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

          {/* {allMeets &&
    allMeets.map((card) => <Card dataCard={card} key={card.id} />)} */}
        </div>
      </div>
    </>
  );
};
export default AllEvents;
