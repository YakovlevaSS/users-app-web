import s from "./index.module.sass";
import { IUser } from "../../interface/user";
import { calculateAgeGroups, calculateGenderGroups } from "../../utilits/anallytics";

interface IProps {
  users: IUser[];
}

export const Analytics: React.FC<IProps> = ({ users }) => {
  const ageGroups = calculateAgeGroups(users);
  const [maleCount, femaleCount] = calculateGenderGroups(users);

  const renderAgeGroups = () => {
    const ageGroupLabels = ['11 to 20', '21 to 30', '31 to 40', '41 to 50', '51+'];
    return ageGroupLabels.map((label, index) => (
      <div key={index} className={s.infoRow}>
        <span className={s.infoTitle}>{label}</span>
        <span className={s.infoValue}>{ageGroups[index]} {ageGroups[index] === 1 ? 'user' : 'users'}</span>
      </div>
    ));
  };

  const renderGenderGroups = () => {
    const genderGroupLabels = ['Male', 'Female'];
    const genderCounts = [maleCount, femaleCount];
    return genderGroupLabels.map((label, index) => (
      <div key={label} className={s.infoRow}>
        <span className={s.infoTitle}>{label}</span>
        <span className={s.infoValue}>{genderCounts[index]} {genderCounts[index] === 1 ? 'user' : 'users'}</span>
      </div>
    ));
  };

  return (
    <div className={s.analyticsWrap}>
      <p className={s.titleAnalytics}>{users.length} Users</p>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Age Groups</p>
        {renderAgeGroups()}
      </div>
      <div className={s.line}></div>
      <div className={s.infoBlog}>
        <p className={s.titleInfoBlog}>Gender Groups</p>
        {renderGenderGroups()}
      </div>
    </div>
  );
};
