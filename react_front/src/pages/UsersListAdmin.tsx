import React, { FC, useEffect, useState } from "react";
import Header from "../components/header/Header.tsx";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import "./usersListAdmin.css";
import UserUsersList from "../components/user-users-list/UserUsersList.tsx";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent.tsx";
import { useParams } from "react-router-dom";
import { AllUserInfo, IUser, IUsers } from "../types/types.tsx";
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
  const [UsersList, setUsersList] = useState<AllUserInfo[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<AllUserInfo[] | null>(
    null
  ); // Состояние для фильтрованных пользователей
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>(""); // Состояние для выбранной роли

  const getValueModal = (data: number) => {
    setModal(data);
  };

  useEffect(() => {
    console.log("da");
    const getUsers = async () => {
      const newUsers = await httpApiMethods.GetAllUsers();
      console.log(newUsers);
      if (newUsers) {
        setUsersList(newUsers);
        setFilteredUsers(newUsers);
      }
      // Изначально показываем всех пользователей
    };

    getUsers();
  }, []);

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
            users && users.groups.length && users.groups[0].name === role
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
          {filteredUsers &&
            filteredUsers.map((user) => (
              <UserUsersList user={user} key={user.id} />
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
