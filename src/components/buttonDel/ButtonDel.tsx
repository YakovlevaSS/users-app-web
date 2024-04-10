import { FC } from "react";
import s from "./index.module.sass";
import { BasketSvg } from "./Basket";

interface IProps {

}

export const ButtonDel: FC<IProps> = () => {
  return (
    <button className={s.buttonDel}>
      <BasketSvg />
    </button>
  );
};
