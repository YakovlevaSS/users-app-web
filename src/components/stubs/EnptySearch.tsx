import s from "./index.module.sass";
import { EmptySearchImg } from "../../utilits/Icons/emptySearch";

export default function EmptySearch() {
  return (
    <div className={s.wrap}>
      <EmptySearchImg />
      <div className={s.blogText}>
        <p className={s.text}>Извините, ничего не найдено</p>
        <p className={s.text}>Попробуйте изменить ваш запрос</p>
      </div>
    </div>
  );
}
