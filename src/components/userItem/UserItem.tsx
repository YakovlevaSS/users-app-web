import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import formatDate from "../../utilits/formatDate";
import { ButtonDel } from "../buttonDel/ButtonDel";

interface IProps {
  user: IUser;
  activeCard: string | null;
  handleActive: (id: string) => void;
  handleDeleteUser: (id: string) => void;
}

export const UserItem: React.FC<IProps> = ({
  user,
  activeCard,
  handleActive,
  handleDeleteUser,
}) => {
  return (
    <div
      className={`${s.cardWrap} ${
        activeCard === user?.login?.md5 ? s.activeCard : ""
      }`}
      onClick={() => handleActive(user?.login?.md5)}
    >
      {activeCard === user?.login?.md5 && (
        <ButtonDel handleDeleteUser={handleDeleteUser} user={user} />
      )}
      <div className={s.titleBlog}>
        <div
          className={`${s.imgBlog} ${
            activeCard === user?.login?.md5 ? s.imgBlogActive : ""
          }`}
        >
          {user.picture.thumbnail && (
            <img
              className={s.avaImg}
              src={user.picture?.thumbnail}
              alt="User Avatar"
            />
          )}
        </div>
        <div className={s.titleText}>
          <p
            className={`${s.name} ${
              activeCard === user?.login?.md5 ? s.activeName : ""
            }`}
          >
            {user?.name?.first} {user?.name?.last}
          </p>
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
          <span className={s.infoValue}>
            {user?.location?.city}, {user?.location?.state},{" "}
            {user?.location?.country}
          </span>
        </div>
      </div>
    </div>
  );
};
