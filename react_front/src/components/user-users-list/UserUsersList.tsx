import React, { FC, useEffect } from "react";
import "./userUsersList.css";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/types.tsx";

interface UserUserProps {
  users: {
    id: number;
    state: number;
    user: IUser;
  };
}

const UserUser: FC<UserUserProps> = ({ users }) => {
  const [User, setUser] = React.useState<IUser | null>(null);
  useEffect(() => {
    console.log(users);
    if (users && users.user) {
      setUser(users.user);
      console.log(User);
    }
  }, [users]);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/profile/${User?.id}`)}
      className="user_users_list"
    >
      <div className="logo_role">
        {User && User.avatar ? (
          <img className="logo_role_img" src={User.avatar} alt="avatar" />
        ) : (
          <div className="logo_role_img"></div>
        )}
        <div className="logo_role_text">Администратор</div>
      </div>
      <div className="user_info">
        <h1>
          {User && User.last_name && User.first_name
            ? `${User.last_name} ${User.first_name}`
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
