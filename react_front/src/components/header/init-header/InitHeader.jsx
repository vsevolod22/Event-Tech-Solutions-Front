import React from "react";
import Logo from "../logo/Logo";
import "./initHeader.css";

const InitHeader = function () {
  return (
    <>
      <Logo />
      <button onClick={() => console.log(3)} className="sign_up">
        Вход
      </button>
    </>
  );
};

export default InitHeader;
