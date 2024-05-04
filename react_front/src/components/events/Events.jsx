import React, { useState, useEffect } from "react";
import "./events.css";
import Card from "../card/Card.jsx";
import { HttpApiMethods } from '../utils/FetchUtils.jsx';
const httpApiMethods = new HttpApiMethods()
const Events = function (props) {
  
  const [data, setData] = useState(null);
  console.log(props.allMeets);

  const [allMeets, setAllMeets] = useState(null);
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
          allMeets.map((card) => <Card dataCard={card} key={card.id} />)}
      </div>
    </div>
  );
};

export default Events;
