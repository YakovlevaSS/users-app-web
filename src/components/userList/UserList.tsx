import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import { UserItem } from "../userItem/UserItem";
import { useState } from "react";

interface IProps {
  users: IUser[];
  handleDeleteUser: (id: string) => void; 
}

export const UserList: React.FC<IProps> = ({ users, handleDeleteUser }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActive = (id: string) => {
    setActiveCard((prevActiveCardId) => (prevActiveCardId === id ? null : id));
  };

  return (
    <div className={s.userList}>
      {users?.map((user) => (
          <UserItem user={user} key={user.login.md5} activeCard={activeCard} handleActive={handleActive} handleDeleteUser={handleDeleteUser}/>
      ))}
    </div>
  );
};
