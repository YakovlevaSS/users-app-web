import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import { UserItem } from "../userItem/UserItem";
import { nanoid } from "nanoid";

interface IProps {
  users: IUser[];
}

export const FuncPanel: React.FC<IProps> = ({ users }) => {
  console.log(users);
  return (
    <div className={s.funcPanel}>
      {users?.map((user) => (
          <UserItem user={user} key={nanoid()} />
      ))}
    </div>
  );
};
