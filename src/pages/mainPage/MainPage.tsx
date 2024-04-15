import s from "./index.module.sass";
import { useEffect, useState } from "react";
import { IUser } from "../../interface/user";
import { UserList } from "../../components/userList/UserList";
import { Search } from "../../components/search/Search";
import { Analytics } from "../../components/analytics/Analytics";
import Loader from "../../components/stubs/Loader";
import Error from "../../components/stubs/Error";
import { getSearch } from "../../utilits/getSearch";
import { fetchData } from "../../components/API/getUsersApi";

export const MainPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    setErrors("");
    fetchData(setUsers,setErrors, setIsLoading);
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
            fetchData(setUsers,setErrors, setIsLoading);
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
