import s from "./index.module.sass";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interface/user";
import { UserList } from "../../components/userList/UserList";
import { Search } from "../../components/search/Search";
import { Analytics } from "../../components/analytics/Analytics";
import Loader from "../../components/stubs/Loader";
import Error from "../../components/stubs/Error";
import { getSearch } from "../../utilits/getSearch";

export const MainPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?results=500`)
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data.results);
        }
      })
      .catch(function (error) {
        console.log(error?.response?.data?.error);
        setErrors(error?.response?.data?.error || "Что-то пошло не так");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setErrors("");
    fetchData();
  }, []);

  useEffect(() => {
    getSearch({ setFilteredUsers, inputValue, users });
  }, [inputValue, users]);

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.login.md5 !== id);
    setUsers(updatedUsers);
  };

  if (errors) {
    return <Error error={errors} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.pageWrap}>
      <div className={s.funcPanel}>
        <Search setInputValue={setInputValue} />
        <button
          className={s.refreshButton}
          onClick={() => {
            setInputValue("");
            fetchData();
          }}
        >
          Refresh Users
        </button>
      </div>
      <div className={s.content}>
        <UserList
          users={inputValue ? filteredUsers : users}
          handleDeleteUser={handleDeleteUser}
        />
        <Analytics users={users} />
      </div>
    </div>
  );
};
