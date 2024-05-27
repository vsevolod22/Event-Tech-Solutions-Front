import "./App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.tsx";
import Event from "./pages/Event.tsx";
import Profile from "./pages/Profile.tsx";
import UsersList from "./pages/UsersList.tsx";
import CreateEvent from "./pages/CreateEvent.tsx";

function App() {
  const [user, setUser] = useState({
    reg: 2,
    role: 2,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main user={user} />}></Route>
        <Route path="/event/:id" element={<Event user={user} />}></Route>
        <Route
          path="/create-event"
          element={<CreateEvent user={user} />}
        ></Route>
        <Route path="/profile/:id" element={<Profile user={user} />}></Route>
        <Route
          path="/users-list/meet/:id"
          element={<UsersList user={user} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
