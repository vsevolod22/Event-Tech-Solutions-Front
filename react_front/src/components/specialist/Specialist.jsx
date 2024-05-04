import React from "react";
import "./specialist.css";
import SvgBookLink from "../../svg/svg-book-link/SvgBookLink";
import SvgTelegramLink from "../../svg/svg-telegram-link/SvgTelegramLink";

const Specialist = function ({ specialistData }) {
  console.log(specialistData);
  return (
    <div className="specialist container">
      <h1>Специалист</h1>
      <div className="specialist_detailed">
        <div className="about_specialist">
          <div className="logo_specialist"></div>
          <div className="data_specialist">
            <h1>Петрова Ирина Владимировна</h1>
            <h2>Ведущий Диетолог</h2>
            <p>+7 (999) 333 - 11 - 11</p>
            <p>petrova_ira@gmail.com</p>
          </div>
        </div>
        <div className="specialist_links">
          <p>Ссылки на материалы специалиста</p>
          <div className="svgs_links_specialist">
            <SvgTelegramLink />
            <SvgBookLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
