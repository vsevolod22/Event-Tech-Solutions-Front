import React from "react";
import "./simpleFilter.css";
import InputFindEvent from "../../UI/input-find-event/InputFindEvent";

const SimpleFilter = function () {
  return (
    <div className="simple_filter">
      <InputFindEvent />
      <div className="selects">
        <select name="actuale_select" id="" className="actuale_select">
          <option value="">
            <p>актуальность</p>
          </option>
        </select>
        <select name="type_event_select" id="" className="type_event_select">
          <option value="">
            <p>тип меропрития</p>
          </option>
        </select>
      </div>
    </div>
  );
};

export default SimpleFilter;
