import React from "react";
import TableUsers from "./TableUsers";
import {QueryClient} from "react-query";
import {User} from "../@types";

interface PageUsersMainProps {
  users: User[];
  isLoading: boolean;
}

const PageUsersMain = ({users, isLoading}: PageUsersMainProps) => {
  return (
      <TableUsers
        users={users}
        isLoading={isLoading}
      />
  )
}
export default PageUsersMain
