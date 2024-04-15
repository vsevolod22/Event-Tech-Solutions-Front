import "./App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Event from "./pages/Event.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  const [user, setUser] = useState({
    reg: true,
    role: 2,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main user={user} />}></Route>
        <Route path="/event/:id" element={<Event user={user} />}></Route>
        <Route path="/profile" element={<Profile user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
