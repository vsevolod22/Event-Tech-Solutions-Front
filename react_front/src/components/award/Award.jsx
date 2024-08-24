import React from "react";
import "../award/award.css";

const Award = () => {
  return (
    <div className="award">
      <div className="award__img" style={{ background: "" }}></div>
      <div className="award__exp">
        <div className="award__exp_get"></div>
      </div>
      <div className="award__title">
        <h2>Спортивные достижения</h2>
      </div>
    </div>
  );
};

export default Award;
