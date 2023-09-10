import PageUsersHeader from "./PageUsersHeader";
import PageUsersMain from "./PageUsersMain";
import PageUsersFooter from "./PageUsersFooter";
import './style.css';
import axios, {AxiosResponse} from "axios";
import {useQuery} from "react-query";
import React from "react";
import {User, UserResponse} from "./@types";


const PageUsers = () => {
  const itemsPerPage = 20;

  const fetchUsers = async () => {
    const { data }: AxiosResponse<UserResponse> = await axios.get("https://randomuser.me/api/?results=60");
    setUsers(data.results)
    return data;
  }

  const {isLoading} = useQuery("users", fetchUsers);
  const [users, setUsers] = React.useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const usersToDisplay = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <div className='pageUsers'>
      <PageUsersHeader
        setUsers={setFilteredUsers}
        users={users}
      />
      <PageUsersMain
        users={usersToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
        isLoading={isLoading}
      />
      <PageUsersFooter
        itemsPerPage={itemsPerPage}
        itemsAmount={usersToDisplay.length}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  )
}

export default PageUsers
