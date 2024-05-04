import React from "react";
import Logo from "../logo/Logo";
import "./initHeader.css";

const InitHeader = function ({ getData }) {
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
