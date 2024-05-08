import React from "react";
import { Skeleton } from "@mui/material";
import "./aboutEvent.css";

const AboutEvent = function ({meet}) {
  return (
    <div className="about_event container">
      <h1>О мероприятии</h1>
      <p>
        {meet && meet.description ? meet.description : <Skeleton variant="text" sx={{ fontSize: '24px' }} />}
      </p>
    </div>
  );
};

export default AboutEvent;
