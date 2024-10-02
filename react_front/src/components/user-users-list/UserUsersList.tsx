import React, { FC, useEffect } from "react";
import "./userUsersList.css";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/types.tsx";

interface UserUserProps {
  users: IUser;
}

const UserUser: FC<UserUserProps> = ({ users }) => {
  const [User, setUser] = React.useState<IUser | null>(null);

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/profile/${users?.id}`)}
      className="user_users_list"
    >
      <div className="logo_role">
        {users && users.avatar ? (
          <img className="logo_role_img" src={users.avatar} alt="avatar" />
        ) : (
          <div className="logo_role_img"></div>
        )}
        <div className="logo_role_text">Администратор</div>
      </div>
      <div className="user_info">
        <h1>
          {users && users.last_name && users.first_name
            ? `${users.last_name} ${users.first_name}`
            : "Нет имени"}{" "}
        </h1>
        <h2>Junior PHP разработчик</h2>
        <p>TG: @dkir</p>
        <p>gmail@gmail.com</p>
      </div>
    </div>
  );
};

export default UserUser;
