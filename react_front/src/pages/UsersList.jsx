import React, {useEffect} from "react";
import Header from "../components/header/Header";
import { HttpApiMethods } from '../components/utils/FetchUtils.tsx';
import "./userList.css";
import UserUsersList from "../components/user-users-list/UserUsersList";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent";
import {useParams} from "react-router-dom";
const httpApiMethods = new HttpApiMethods()
const UsersList = function ({ user }) {
  const { id } = useParams();
  const [UsersList, setUsersList] = React.useState(null);
  useEffect(() => {
    const getUsers = async (id) => {

      const newUsers = await httpApiMethods.GetUsersByMeet(id)
      console.log(newUsers);
      setUsersList(newUsers);



    };

    getUsers(id);


  }, [id]);
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
          {UsersList && UsersList.map(userObj =>
            <UserUsersList user={userObj.user} key={userObj.id} />
          ) }

        </div>
      </div>
    </>
  );
};

export default UsersList;
