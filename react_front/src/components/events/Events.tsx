import React, { useState, useEffect } from "react";
import "./events.css";
import Card from "../card/Card.tsx";
import { HttpApiMethods } from '../utils/FetchUtils.tsx';
import {AllMeetings} from "../../types/types.tsx";
const httpApiMethods = new HttpApiMethods()
const Events = function () {

  const [allMeets, setAllMeets] = useState<AllMeetings | null>(null);
  useEffect(() => {
    const getAllMeetings = async () => {
      const AllMeets = await httpApiMethods.GetAllMeetings()
      console.log(AllMeets);
      setAllMeets(AllMeets);
      
      

    }
    getAllMeetings();
   
  }, []);
  
  return (
    <div className="events">
      <div className="cards">
        {allMeets &&
          allMeets.meet.map((card) => <Card dataCard={card} key={card.id} />)}
      </div>
    </div>
  );
};

export default Events;
