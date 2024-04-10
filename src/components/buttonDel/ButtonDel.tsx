import { FC } from "react";
import s from "./index.module.sass";
import { BasketSvg } from "./Basket";
import { IUser } from "../../interface/user";

interface IProps {
  handleDeleteUser: (id: string) => void;
  user: IUser;
}

export const ButtonDel: FC<IProps> = ({handleDeleteUser, user}) => {
  return (
    <button className={s.buttonDel} onClick={() => handleDeleteUser(user.login.md5)}>
      <BasketSvg />
    </button>
  );
};
