import React, {FC} from "react";
import { Skeleton } from "@mui/material";
import "./aboutEvent.css";
import {IMeet} from "../../types/types.tsx";

interface AboutEventProps {
    meet: IMeet | null
}


const AboutEvent: FC<AboutEventProps> = function ({meet}) {
  return (
    <div className="about_event container">
      <h1>О мероприятии</h1>
      <p>
        {meet && meet.description ? meet.description : <Skeleton variant="text" sx={{ fontSize: '1.25vw' }} />}
      </p>
    </div>
  );
};

export default AboutEvent;
