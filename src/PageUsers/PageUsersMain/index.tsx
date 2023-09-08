import React from "react";
import TableUsers from "./TableUsers";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const PageUsersMain = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TableUsers/>
    </QueryClientProvider>
  )
}
export default PageUsersMain
