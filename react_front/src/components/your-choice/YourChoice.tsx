import React, { useState } from "react";
import "./yourChoice.css";
import SimpleFilter from "../filters/simple-filter/SimpleFilter";
import Events from "../events/Events";
import Awards from "../awards/Awards";
import Hardfilter from "../filters/hard-filter/HardFilter";

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
    <></>
  );
};

export default YourChoice;
