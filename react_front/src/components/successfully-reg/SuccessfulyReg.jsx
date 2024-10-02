import React from "react";
import "./successfulyReg.css";

const SuccessfulyReg = ({ onClose, message }) => {
  return (
    <>
      <div className="successfully-reg">
        <div className="successfully-reg__content">
          <h2>{message}</h2>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </>
  );
};

export default SuccessfulyReg;
