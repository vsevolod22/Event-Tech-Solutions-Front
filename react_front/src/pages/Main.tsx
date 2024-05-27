
import Login from "../components/login-window/Login.tsx";
import React, {FC, useEffect, useState} from "react";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import Header from "../components/header/Header.tsx";
import axios from "axios";
import MainContent from "../components/main-content/MainContent.tsx";
import Events from "../components/events/Events.tsx";
import HardFilter from "../components/filters/hard-filter/HardFilter.tsx";
const httpApiMethods = new HttpApiMethods();

interface MainProps {
    user : {
        role: number,
        reg: number,
    }
}



const Main: FC<MainProps> = ({ user }) => {
  const [modal, setModal] = useState(0);
  const getValueModal = (data : number) => {
    setModal(data);
  };
  // console.log(modal);

  return (
    <>
      <Header getData={getValueModal} user={user} />
      <Login getData={getValueModal} visible={modal} setVisible={setModal} />
      <MainContent />
      <HardFilter />
      <Events />
    </>
  );
}

export default Main;
