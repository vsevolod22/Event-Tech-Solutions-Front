
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import MainContent from "../components/main-content/MainContent.jsx";
import Events from "../components/events/Events.jsx";
import HardFilter from "../components/filters/hard-filter/HardFilter.jsx";
import Login from "../components/login-window/Login.jsx";

import { HttpApiMethods } from '../components/utils/FetchUtils';
import axios from "axios";
const httpApiMethods = new HttpApiMethods()
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
      <Events  />
    </>
  );
}

export default Main;
