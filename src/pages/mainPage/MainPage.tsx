import s from "./index.module.sass";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interface/user";
import { UserList } from "../../components/userList/UserList";
import { Search } from "../../components/search/Search";
import { Analytics } from "../../components/analytics/Analytics";
import formatDate from "../../utilits/formatDate";

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
    const Search = () => {
      const filtered = users.filter(
        (user) =>
          user.name?.first.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.name?.last.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.phone.toLowerCase().includes(inputValue.toLowerCase()) ||
          formatDate(user.dob?.date)
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          user.location?.city
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          user.location?.state
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          user.location?.country
            .toLowerCase()
            .includes(inputValue.toLowerCase())
      );
      setFilteredUsers(filtered);
    };
    Search();
  }, [inputValue, users]);

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.login.md5 !== id);
    setUsers(updatedUsers);
  };

  if (errors) {
    return <div>{errors}</div>;
  }
  if (isLoading) {
    return <div>Загружаем</div>;
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
