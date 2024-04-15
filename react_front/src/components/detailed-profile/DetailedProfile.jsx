import React from "react";
import "./detailedProfile.css";

const DetailedProfile = function () {
  return (
    <div className="human_frame">
      <div className="photo_card"></div>
      <div className="human_data">
        <h1>Кириллов Алексей Викторович</h1>
        <h2>Junior PHP разработчик</h2>
        <p></p>
        <p></p>
        <div className="exp"></div>
      </div>
      <div className="edit">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5026 1.25163C20.1624 -0.408104 22.8534 -0.40809 24.513 1.25163L24.7561 1.49469C26.4159 3.15442 26.4159 5.84537 24.7561 7.5051L22.2949 9.96629L8.34292 23.9184C8.16136 24.0998 7.93387 24.2286 7.68478 24.291L2.01811 25.7076C1.53534 25.8283 1.02464 25.6868 0.672771 25.335C0.3209 24.9831 0.179445 24.4724 0.300145 23.9896L1.71681 18.323C1.77909 18.0739 1.90789 17.8464 2.08944 17.6648L16.1229 3.63135L18.5026 1.25163ZM22.5095 3.2551C21.9563 2.70186 21.0593 2.70186 20.5061 3.2551L19.1091 4.6521L21.3126 6.9417L22.7526 5.50163C23.3058 4.9484 23.3058 4.05141 22.7526 3.49816L22.5095 3.2551ZM19.3087 8.94554L17.1052 6.65593L4.37038 19.3908L3.62153 22.3862L6.61691 21.6374L19.3087 8.94554Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
    </div>
  );
};

export default DetailedProfile;
