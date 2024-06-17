import React, { FC, useEffect, useState } from "react";
import Header from "../components/header/Header";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import "./usersList.css";
import UserUsersList from "../components/user-users-list/UserUsersList";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent";
import { useParams } from "react-router-dom";
import { IUser } from "../types/types.tsx";
import AddUserModal from "../components/add-user-modal/AddUserModal.jsx";
const httpApiMethods = new HttpApiMethods();

interface UserListProps {
  user: {
    role: number;
    reg: number;
  };
}

const UsersList: FC<UserListProps> = function ({ user }) {
  const { id } = useParams();
  const [modal, setModal] = useState(0);
  const [UsersList, setUsersList] = React.useState<IUser[] | null>(null);
  const getValueModal = (data: number) => {
    setModal(data);
  };
  useEffect(() => {
    if (id) {
      const getUsers = async (id: string) => {
        const newUsers = await httpApiMethods.GetUsersByMeet(id);
        console.log(newUsers);
        setUsersList(newUsers);
      };

      getUsers(id);
    }
  }, [id]);
  return (
    <>
      <Header getData={getValueModal} user={user} />
      <div className="container page_users_list">
        <div className="simple_filter">
          <InputFindEvent />
          <select name="type_even_selectt" id="" className="type_event_select">
            <option value="">роль пользователя</option>
          </select>
        </div>
        <div className="users_list">
          <div className="add_user_users_list">
            <div className="add_user_users_list_content">
              <button className="add_user_users_list_btn">
                <p>+</p>
              </button>
              <h3 data-text="Добавить пользователя">Добавить пользователя</h3>
            </div>
          </div>
          {UsersList &&
            UsersList.map((user) => (
              <UserUsersList user={user} key={user.id} />
            ))}
        </div>
      </div>
      <AddUserModal />
    </>
  );
};

export default UsersList;
