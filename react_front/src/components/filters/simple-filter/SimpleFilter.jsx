import React from "react";
import "./simpleFilter.css";
import InputFindEvent from "../../UI/input-find-event/InputFindEvent";

const SimpleFilter = function () {
  return (
    <div className="simple_filter">
      <InputFindEvent />
      <div className="selects">
        <select name="actuale" id="" className="actuale">
          <option value="">актуальность</option>
        </select>
        <select name="type_event" id="" className="type_event">
          <option value="">тип меропрития</option>
        </select>
      </div>
    </div>
  );
};

export default SimpleFilter;
