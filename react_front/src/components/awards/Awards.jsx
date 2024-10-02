import React from "react";
import Award from "../award/Award";

import "../awards/awards.css";

const Awards = () => {
  return (
    <div className="awards container">
      <div className="awards__title">
        <h2>Полученные достижения</h2>
      </div>
      <div className="awards__list">
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        {/* {allMeets &&
          allMeets.map((awards) => <Award dataAward={award} key={card.id} />)} */}
      </div>
    </div>
  );
};

export default Awards;
