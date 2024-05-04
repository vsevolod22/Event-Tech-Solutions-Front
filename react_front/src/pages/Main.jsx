import React, { useEffect, useState } from "react";
import { HttpApiMethods } from '../components/utils/FetchUtils';

import Header from "../components/header/Header.jsx";
import axios from "axios";
import MainContent from "../components/main-content/MainContent.jsx";
import Events from "../components/events/Events.jsx";
import HardFilter from "../components/filters/hard-filter/HardFilter.jsx";
const httpApiMethods = new HttpApiMethods()
function Main({ user }) {
  

  return (
    <>
      <Header user={user} />
      <MainContent />
      <HardFilter />
      <Events  />
    </>
  );
}

export default Main;
