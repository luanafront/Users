import React from "react";
import axios, {AxiosResponse} from "axios";
import { useQuery } from "react-query";

interface Location {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  country: string;
  postcode: number;
  state: string;
  street: {
    name: string;
    number: number;
  };
  timezone: {
    description: string;
    offset: string;
  }
}
interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}
interface User {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: Location;
  login: Login;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}
interface UserResponse {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: User[]
}

const fetchUsers = async () => {
  const { data }: AxiosResponse<UserResponse> = await axios.get("https://randomuser.me/api/");
  return data;
}

const TableUsers = () => {
  const { data, isLoading, error } = useQuery("users", fetchUsers);
  console.log(data)
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.results.map((user, index) => (
            <tr key={index}>
              <td>{user.id.value}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.name.title}</td>
              <td>{user.registered.date}</td>
              <td>{user.registered.age}</td>
              <td>
                <button onClick={() => console.log(user.id.value)}>View Profile</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default TableUsers
