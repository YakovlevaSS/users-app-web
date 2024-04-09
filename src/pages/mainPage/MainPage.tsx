import s from "./index.module.sass";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interface/user";
import { UserList } from "../../components/userList/UserList";

export const MainPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<string>("");

  const fetchData = () => {
    axios
      .get(`https://randomuser.me/api/?results=500`)
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data.results);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        console.debug(error.response.status);
        setErrors(error.response.data.message);
      });
  };
  useEffect(() => {
    setErrors("");
    fetchData();
  }, []);

  console.log(users);
  if (errors) {
    return <div>ошибка</div>;
  }
  if (isLoading) {
    return <div>Загружаем</div>;
  }
  return (
    <div className={s.pageWrap}>
      <div className={s.funcPanel}>
        <button className={s.refreshButton} onClick={()=>{fetchData()}}>Refresh Users</button>
      </div>
      <UserList users={users} />
    </div>
  );
};
