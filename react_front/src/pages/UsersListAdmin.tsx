import React, { FC, useEffect, useState } from "react";
import Header from "../components/header/Header.tsx";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import "./usersListAdmin.css";
import UserUsersList from "../components/user-users-list/UserUsersList.tsx";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent.tsx";
import { useParams } from "react-router-dom";
import { IUsers } from "../types/types.tsx";
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
  const [UsersList, setUsersList] = React.useState<IUsers[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(".modal");
      if (modal && !modal.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <Header getData={getValueModal} user={user} isBlurred={isModalOpen} />
      <div
        className={`container page_users_list ${isModalOpen ? "blurred" : ""}`}
      >
        <div className="simple_filter">
          <InputFindEvent />
          <select name="type_even_selectt" id="" className="type_event_select">
            <option value="">роль пользователя</option>
          </select>
        </div>
        <div className="users_list">
          <div className="add_user_users_list">
            <div className="add_user_users_list_content">
              <button
                className="add_user_users_list_btn"
                onClick={handleOpenModal}
              >
                <p>+</p>
              </button>
              <h3 data-text="Добавить пользователя">Добавить пользователя</h3>
            </div>
          </div>
          {UsersList &&
            UsersList.map((user) => (
              <UserUsersList users={user} key={user.id} />
            ))}
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="modal-overlay"></div>
          <div className="modal">
            <AddUserModal onClose={handleCloseModal} />
          </div>
        </>
      )}
    </>
  );
};

export default UsersList;
