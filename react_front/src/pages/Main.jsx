import Login from "../components/login-window/Login.jsx";
import React, { useEffect, useState } from "react";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import Header from "../components/header/Header.jsx";
import axios from "axios";
import MainContent from "../components/main-content/MainContent.jsx";
import Events from "../components/events/Events.jsx";
import HardFilter from "../components/filters/hard-filter/HardFilter.jsx";
const httpApiMethods = new HttpApiMethods();

function Main({ user }) {
  const [modal, setModal] = useState(0);
  const getValueModal = (data) => {
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
