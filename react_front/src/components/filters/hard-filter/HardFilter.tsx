import React from "react";
import "./hardFilter.css";
import SimpleFilter from "../simple-filter/SimpleFilter.tsx";

const Hardfilter = function () {
  return (
    <div className="hard_filter container">
      <SimpleFilter />
      <div className="count_select">
        <p>{/* fsdjfkdfj*/}100 мероприятий</p>
        <select name="" id="">
          <option value="">по актуальности</option>
        </select>
      </div>
    </div>
  );
};

export default Hardfilter;
