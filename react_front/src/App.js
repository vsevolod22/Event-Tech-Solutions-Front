import "./App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Event from "./pages/Event.jsx";
import Profile from "./pages/Profile.tsx";
import UsersList from "./pages/UsersList.jsx";

function App() {
  const [user, setUser] = useState({
    reg: 0,
    role: 0,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main user={user} />}></Route>
        <Route path="/event/:id" element={<Event user={user} />}></Route>
        <Route path="/profile/:id" element={<Profile user={user} />}></Route>
        <Route path="/users-list/meet/:id" element={<UsersList user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
