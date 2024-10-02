import React, { FC, useEffect, useState } from "react";
import Header from "../components/header/Header.tsx";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import "./usersListAdmin.css";
import UserUsersList from "../components/user-users-list/UserUsersList.tsx";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent.tsx";
import { useParams } from "react-router-dom";
import { IUser, IUsers } from "../types/types.tsx";
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
  const [UsersList, setUsersList] = useState<IUsers[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<IUsers[] | null>(null); // Состояние для фильтрованных пользователей
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>(""); // Состояние для выбранной роли

  const getValueModal = (data: number) => {
    setModal(data);
  };

  useEffect(() => {
    if (id) {
      const getUsers = async (id: string) => {
        const newUsers = await httpApiMethods.GetUsersByMeet(id);

        if (newUsers) {
          setUsersList(newUsers);
          setFilteredUsers(newUsers);
        }
        // Изначально показываем всех пользователей
      };

      getUsers(id);
    }
  }, [id, localStorage.getItem("token")]);

  // Обработчик изменения роли в фильтре
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    setSelectedRole(role);

    // Фильтрация пользователей по роли
    if (UsersList) {
      if (role === "") {
        // Если выбрана опция "Все", показываем всех пользователей
        setFilteredUsers(UsersList);
      } else {
        const filtered = UsersList.filter(
          (users) =>
            users.user &&
            users.user.groups.length &&
            users.user.groups[0].name === role
        );
        setFilteredUsers(filtered);
      }
    }
  };

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
      <Header getData={getValueModal} isBlurred={isModalOpen} />
      <div
        className={`container page_users_list ${isModalOpen ? "blurred" : ""}`}
      >
        <div className="simple_filter">
          <InputFindEvent />

          {/* Фильтр по ролям */}
          <select
            name="role_filter"
            id="role_filter"
            className="type_event_select"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="">Все роли</option>
            <option value="Администраторы">Администраторы</option>
            <option value="Менеджеры">Менеджеры</option>
          </select>
        </div>

        <div className="users_list">
          {filteredUsers &&
            filteredUsers.map((user) => (
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
