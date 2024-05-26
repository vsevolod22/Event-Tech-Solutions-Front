import React, { useEffect, useState } from "react";
import "./specialist.css";
import SvgBookLink from "../../svg/svg-book-link/SvgBookLink";
import SvgTelegramLink from "../../svg/svg-telegram-link/SvgTelegramLink";
import { HttpApiMethods } from '../utils/FetchUtils.tsx';
import Skeleton from '@mui/material/Skeleton';
const httpApiMethods = new HttpApiMethods()
const Specialist = function ({ meet }) {
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    if (meet) {
      const getMeet = async (id) => {
    
        const newSpeaker = await httpApiMethods.GetUserById(id)
        console.log(newSpeaker);
        setSpeaker(newSpeaker);
          
          
  
      };
      getMeet(meet.speaker.id);
    }
    
  }, [meet]);


  return (
    <div className="specialist container">
      <h1>Специалист</h1>
      <div className="specialist_detailed">
        <div className="about_specialist">
          {speaker && speaker.avatar ? <img className="logo_specialist" src={speaker.avatar} alt="avatar"></img> : <div className="logo_specialist"></div>}
          <div className="data_specialist">
            <h1>{speaker && speaker.first_name && speaker.last_name ?  speaker.last_name + ' ' + speaker.first_name :  <Skeleton variant="text" sx={{ fontSize: '36px' }} />}</h1>
            <h2>{speaker && speaker.job ?  speaker.job :  <Skeleton variant="text" sx={{ fontSize: '32px' }} />}</h2>
            <p>{speaker && speaker.phone_number ?  speaker.phone_number :  <Skeleton variant="text" sx={{ fontSize: '22px' }} />}</p>
            <p>{speaker && speaker.mail ?  speaker.mail :  <Skeleton variant="text" sx={{ fontSize: '22px' }} />}</p>
          </div>
        </div>
        <div className="specialist_links">
          <p>Ссылки на материалы специалиста</p>
          <div className="svgs_links_specialist">
            <SvgTelegramLink />
            <SvgBookLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
