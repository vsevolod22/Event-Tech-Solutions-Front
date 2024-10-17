import React, { FC, useEffect } from "react";
import "./userUsersList.css";
import { useNavigate } from "react-router-dom";
import { AllUserInfo, IUser } from "../../types/types.tsx";

interface UserUserProps {
  users?: {
    id: number;
    state: number;
    user: AllUserInfo;
  };
  user?: AllUserInfo;
}

const UserUser: FC<UserUserProps> = ({ users, user }) => {
  const [User, setUser] = React.useState<AllUserInfo | null>(null);
  useEffect(() => {
    console.log(users);
    if (users && users.user) {
      setUser(users.user);
      console.log(User);
    }
  }, [users]);
  const navigate = useNavigate();
  const defaultRole = "Участник"
  return (
    <>
      {users?.user ? (
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
            <div className="logo_role_text">
              {User?.groups?.length !== 0 ?  User?.groups[0].name : defaultRole}
            </div>
          </div>
          <div className="user_info">
            <h1>
              {User && User.last_name && User.first_name
                ? `${User.last_name} ${User.first_name}`
                : "Нет имени"}{" "}
            </h1>
            <h2>{User && User.job ? User.job : "Нет должности"}</h2>
            <p>{User && User.telegram ? User.telegram : "Нет tg"}</p>
            <p>{User && User.mail ? User.mail : "Нет почты"}</p>
          </div>
        </div>
      ) : (
        <div className="user_users_list">
          <div className="logo_role">
            {user && user.avatar ? (
              <img className="logo_role_img" src={user.avatar} alt="avatar" />
            ) : (
              <div className="logo_role_img"></div>
            )}
            <div className="logo_role_text">
            {user?.groups?.length !== 0 ? user?.groups[0].name : defaultRole}
            </div>
          </div>
          <div className="user_info">
            <h1>
              {user && user.last_name && user.first_name
                ? `${user.last_name} ${user.first_name}`
                : "Нет имени"}{" "}
            </h1>
            <h2>{user && user.job ? user.job : "Нет должности"}</h2>
            <p>{user && user.telegram ? user.telegram : "Нет tg"}</p>
            <p>{user && user.mail ? user.mail : "Нет почты"}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserUser;
