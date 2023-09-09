import React from "react";
import './style.css';
import {User} from "../@types";

interface TableUsersProps {
  isLoading: boolean,
  users: User[],
}

const TableUsers = ({isLoading, users}: TableUsersProps) => {
    return (
      <table className='tableUsers'>
        <thead className='tableUsers__titles'>
          <tr className='tableUsers__title'>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='tableUsers__texts'>
          {isLoading ? 'loading...' : users.map((user, index) => (
            <tr key={index} className='tableUsers__text'>
              <td>{user.id.value || '-'}</td>
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
