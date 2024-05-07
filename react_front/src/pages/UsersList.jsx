import React from "react";
import Header from "../components/header/Header";
import "./userList.css";
import UserUsersList from "../components/user-users-list/UserUsersList";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent";

const UsersList = function ({ user }) {
  return (
    <>
      <Header user={user} />
      <div className="container page_users_list">
        <div className="simple_filter">
          <InputFindEvent />
          <select name="type_even_selectt" id="" className="type_event_select">
            <option value="">роль пользователя</option>
          </select>
        </div>
        <div className="users_list">
          <UserUsersList />
          <UserUsersList />
          <UserUsersList />
          <UserUsersList />
          <UserUsersList />
          <UserUsersList />
        </div>
      </div>
    </>
  );
};

export default UsersList;
