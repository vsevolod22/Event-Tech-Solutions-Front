import React from "react";
import "./usersList.css";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent.tsx";
import UserUsersList from "../components/user-users-list/UserUsersList.tsx";
const UsersList = () => {
  return (
    <>
      <div className="simple_filter">
        <InputFindEvent />
        <select name="type_even_selectt" id="" className="type_event_select">
          <option value="">роль пользователя</option>
        </select>
      </div>
      <div className="users_list">
        {UsersList &&
          UsersList.map((user) => (
            <div
              onClick={() => console.log("take user.id for choose specialist")}
            >
              <UserUsersList user={user} key={user.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default UsersList;
