import s from "./index.module.sass";
import { IUser } from "../../interface/user";

interface IProps {
  users: IUser[];
}

export const Analytics: React.FC<IProps> = ({ users }) => {
  return (
    <div className={s.analyticsWrap}>
      <p className={s.titleAnalytics}>{users.length} Users</p>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Age Groups</p>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>11 to 20</span>
          <span className={s.infoValue}> users</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>21 to 30</span>
          <span className={s.infoValue}> users</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>31 to 40</span>
          <span className={s.infoValue}> users</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>41 to 50</span>
          <span className={s.infoValue}> users</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>51+</span>
          <span className={s.infoValue}> users</span>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Gender Groups</p>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>Male</span>
          <span className={s.infoValue}> users</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>Female</span>
          <span className={s.infoValue}> users</span>
        </div>
      </div>
    </div>
  );
};
