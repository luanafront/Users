import React from 'react';
import PageUsers from "./PageUsers";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {Route, Routes} from "react-router-dom";
import PageUserDetail from "./PageUserDetail";
import axios, {AxiosResponse} from "axios";
import {User, UserResponse} from "./PageUsers/@types";

function App() {
  const fetchUsers = async () => {
    const { data }: AxiosResponse<UserResponse> = await axios.get("https://randomuser.me/api/?results=60&nat=br");
    console.log("fez get e atualizou o estado")
    setUsers(data.results)
    return data;
  }

  const {isLoading} = useQuery("users", fetchUsers);
  const [users, setUsers] = React.useState<User[]>([]);

  return (
    <Routes>
      <Route element={<PageUsers users={users} isLoading={isLoading}/>} path='/'/>
      <Route element={<PageUserDetail users={users}/>} path='/detail'/>
    </Routes>
  );
}

export default App;
