import React, {FC} from "react";
import Logo from "../logo/Logo.tsx";
import "./initHeader.css";

interface InitHeaderProps {
    getData: (data: number) => void; // Функция для получения данных
}

const InitHeader : FC<InitHeaderProps> =  ({ getData }) => {
  // console.log(getData); 
  return (
    <>
      <Logo />
      <button onClick={() => getData(1)} className="sign_up">
        Вход
      </button>
    </>
  );
};

export default InitHeader;
