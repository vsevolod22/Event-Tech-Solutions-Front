// import React, { useEffect, useState } from "react";
import React from "react";
import Header from "../components/header/Header.jsx";
// import axios from "axios";
import MainContent from "../components/main-content/MainContent.jsx";
import Events from "../components/events/Events.jsx";

function Main({ user }) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8000/api/user/");
  //     setData(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Header user={user} />
      <MainContent />
      <Events />
    </>
  );
}

export default Main;
