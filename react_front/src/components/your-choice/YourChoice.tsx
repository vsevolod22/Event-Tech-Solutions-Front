import React, { useState } from "react";
import "./yourChoice.css";

const YourChoice = function () {
  const [firstBlockClicked, setFirstBlockClicked] = useState(true); // Состояние для отслеживания нажатия на первый блок
  const [secondBlockClicked, setSecondBlockClicked] = useState(false); // Состояние для отслеживания нажатия на второй блок

  // Функция для обработки клика на первый блок
  const handleFirstBlockClick = () => {
    setFirstBlockClicked(true); // Устанавливаем состояние нажатия на первый блок
    setSecondBlockClicked(false); // Сбрасываем состояние нажатия на второй блок
  };

  // Функция для обработки клика на второй блок
  const handleSecondBlockClick = () => {
    setSecondBlockClicked(true); // Устанавливаем состояние нажатия на второй блок
    setFirstBlockClicked(false); // Сбрасываем состояние нажатия на первый блок
  };
  return (
    <div className="choice">
      <div onClick={handleFirstBlockClick} className="your_events_rewards">
        <p>Ваши меропрития</p>
        <div
          className={`${
            firstBlockClicked ? "underline_selected" : "underline_default"
          }`}
        ></div>
      </div>
      <div onClick={handleSecondBlockClick} className="your_events_rewards">
        <p>Ваши достижения</p>
        <div
          className={`${
            secondBlockClicked ? "underline_selected" : "underline_default"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default YourChoice;
