import formatDate from "./formatDate";
import { IUser } from "../interface/user";

interface getSearchProps {
  users: IUser[];
  inputValue: string;
  setFilteredUsers: (users: IUser[]) => void;
}

export const getSearch = ({
  setFilteredUsers,
  inputValue,
  users,
}: getSearchProps): void => {
  const filtered = users.filter(
    (user) =>
      user.name?.first.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.name?.last.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.phone.toLowerCase().includes(inputValue.toLowerCase()) ||
      formatDate(user.dob?.date)
        .toLowerCase()
        .includes(inputValue.toLowerCase()) ||
      user.location?.city.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.location?.state.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.location?.country.toLowerCase().includes(inputValue.toLowerCase())
  );
  setFilteredUsers(filtered);
};
