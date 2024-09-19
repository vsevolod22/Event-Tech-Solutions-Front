import React, { FC, useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";

import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";

import Specialist from "../components/specialist/Specialist";
import AboutEvent from "../components/about-event/AboutEvent";
import InputComment from "../components/input-comment/InputComment";

import EventDetailed from "../components/event-detailed/EventDetailed";
import Login from "../components/login-window/Login";
import Events from "../components/events/Events";
import { IMeet } from "../types/types.tsx";
const httpApiMethods = new HttpApiMethods();

interface EventProps {
  user: {
    role: number;
    reg: number;
  };
}

const Event: FC<EventProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const [modal, setModal] = useState(0);
  const getValueModal = (data: number) => {
    setModal(data);
  };
  const [meet, setMeet] = useState<IMeet | null>(null);

  useEffect(() => {
    if (id) {
      const getMeet = async (id: string) => {
        const newMeet = await httpApiMethods.GetMeetingById(id);
        console.log(newMeet);
        setMeet(newMeet);
      };

      getMeet(id);
    }
  }, [id, localStorage.getItem("token")]);

  return (
    <>
      <Header getData={getValueModal} />
      <Login
        getData={getValueModal}
        visible={modal}
        setVisible={setModal}
      ></Login>
      <EventDetailed meet={meet} />
      <AboutEvent meet={meet} />
      <Specialist meet={meet} />

      <InputComment id={id} />
      <h1
        style={{
          padding: "0 10.417vw",
          marginBottom: "3.646vw",
          color: "rgba(0, 0, 0, 1)",
          lineHeight: "3.555vw",
          fontSize: "2.917vw",
          fontWeight: "400",
        }}
      >
        Ещё меропрития
      </h1>
      <Events />
    </>
  );
};

export default Event;
