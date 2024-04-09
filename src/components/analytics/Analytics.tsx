import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import { calculateAgeGroups, calculateGenderGroups } from "../../utilits/anallytics";

interface IProps {
  users: IUser[];
}

export const Analytics: React.FC<IProps> = ({ users }) => {

  const ageGroups = calculateAgeGroups(users);
  const [maleCount, femaleCount] = calculateGenderGroups(users);

  return (
    <div className={s.analyticsWrap}>
      <p className={s.titleAnalytics}>{users.length} Users</p>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Age Groups</p>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>11 to 20</span>
          <span className={s.infoValue}>{ageGroups[0]} {ageGroups[0] == 1 ? 'user' : 'users'}</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>21 to 30</span>
          <span className={s.infoValue}>{ageGroups[1]} {ageGroups[1] == 1 ? 'user' : 'users'}</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>31 to 40</span>
          <span className={s.infoValue}>{ageGroups[2]} {ageGroups[2] == 1 ? 'user' : 'users'}</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>41 to 50</span>
          <span className={s.infoValue}>{ageGroups[3]} {ageGroups[3] == 1 ? 'user' : 'users'}</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>51+</span>
          <span className={s.infoValue}>{ageGroups[4]} {ageGroups[4] == 1 ? 'user' : 'users'}</span>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Gender Groups</p>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>Male</span>
          <span className={s.infoValue}>{maleCount} {maleCount == 1 ? 'user' : 'users'}</span>
        </div>
        <div className={s.infoRow}>
          <span className={s.infoTitle}>Female</span>
          <span className={s.infoValue}>{femaleCount} {femaleCount == 1 ? 'user' : 'users'}</span>
        </div>
      </div>
    </div>
  );
};
