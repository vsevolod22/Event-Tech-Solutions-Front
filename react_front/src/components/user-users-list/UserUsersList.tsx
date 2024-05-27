import React, {FC} from "react";
import "./userUsersList.css";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../types/types.tsx";


interface UserUsersListProps {
    user: IUser
}



const UserUsersList : FC<UserUsersListProps> = ({user}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/profile/${user.id}`)} className="user_users_list">
      <div className="logo_role">
          {user && user.avatar ? <img className="logo_role_img" src={user.avatar} alt="avatar"/> : <div className="logo_role_img"></div>}
        <div className="logo_role_text">Администратор</div>
      </div>
      <div className="user_info">
        <h1>{user && user.last_name && user.first_name ? `${user.last_name} ${user.first_name}` : 'Нет имени'} </h1>
        <h2>Junior PHP разработчик</h2>
        <p>TG: @dkir</p>
        <p>gmail@gmail.com</p>
      </div>
    </div>
  );
};

export default UserUsersList;
