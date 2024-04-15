import s from "./index.module.sass";

interface IProps {
  error: string;
}

const Error: React.FC<IProps> = ({ error }) => {
  return (
    <div className={s.wrap}>
      <div className={s.blogText}>
        <p className={s.textError}>Произошла ошибка</p>
        <p className={s.textError}>{error}</p>
      </div>
    </div>
  );
};

export default Error;
