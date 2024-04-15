import axios from 'axios';
import { IUser } from '../../interface/user';

export const fetchData = (setUsers: (users: IUser[]) => void, setErrors: (error: string) => void, setIsLoading: (loading: boolean) => void) => {
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

