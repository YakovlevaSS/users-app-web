import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import formatDate from "../../utilits/formatDate";
import { useState } from "react";

interface IProps {
  user: IUser;
}

export const UserItem: React.FC<IProps> = ({ user }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveCardId(prevActiveCardId => prevActiveCardId === id ? null : id);
  }

  return (
    <div className={`${s.cardWrap} ${activeCardId === user?.login?.md5 ? s.active : ''}`} onClick={() => handleClick(user?.login?.md5 )}>
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
            <span className={s.infoValue}>{formatDate(user?.dob?.date)}</span>
          </div>
          <div className={s.infoRow}>
            <span className={s.infoTitle}>Address</span>
            <span className={s.infoValue}>{user?.location?.city}, {user?.location?.state}, {user?.location?.country}</span>
          </div>
        </div>

    </div>
  );
};
