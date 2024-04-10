import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import { UserItem } from "../userItem/UserItem";
// import { nanoid } from "nanoid";

interface IProps {
  users: IUser[];
}

export const UserList: React.FC<IProps> = ({ users }) => {
  return (
    <div className={s.userList}>
      {users?.map((user) => (
          <UserItem user={user} key={user.login.md5} />
      ))}
    </div>
  );
};
