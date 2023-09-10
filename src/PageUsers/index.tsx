import PageUsersHeader from "./PageUsersHeader";
import PageUsersMain from "./PageUsersMain";
import PageUsersFooter from "./PageUsersFooter";
import './style.css';
import React from "react";
import {User} from "./@types";

interface PageUsersProps {
  users: User[];
  isLoading: boolean;
}
const PageUsers = ({users, isLoading}: PageUsersProps) => {
  const itemsPerPage = 20;

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
