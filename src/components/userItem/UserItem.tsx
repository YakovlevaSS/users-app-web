import s from "./index.module.sass";
import { IUser } from "../../interface/user";

interface IProps {
  user: IUser;
}

export const UserItem: React.FC<IProps> = ({ user }) => {

  return (
    <div className={s.cardWrap}>
      <div className={s.titleBlog}>
        <div className={s.imgBlog}></div>
        <div className={s.titleText}>
          <p className={s.name}>{user?.name?.first} {user?.name?.last}</p>
          <p className={s.email}>{user.email}</p>
        </div>
        </div>
        <div className={s.infoBlog}>
          <div className={s.infoRow}>
            <span className={s.infoTitle}>Phone No</span>
            <span className={s.infoValue}>{user?.phone}</span>
          </div>
          <div className={s.infoRow}>
            <span className={s.infoTitle}>Birthday</span>
            <span className={s.infoValue}>{user?.dob?.date}</span>
          </div>
          <div className={s.infoRow}>
            <span className={s.infoTitle}>Address</span>
            <span className={s.infoValue}>{user?.location?.city}, {user?.location?.state}, {user?.location?.country}</span>
          </div>
        </div>

    </div>
  );
};
