import React, {useEffect} from "react";
import './style.css';
import {User} from "../@types";
import {useNavigate} from "react-router-dom";

interface TableUsersProps {
  isLoading: boolean,
  users: User[],
}

const TableUsers = ({isLoading, users}: TableUsersProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(!user) return
    localStorage.removeItem("user");
  }, [])

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
                <button onClick={() => {
                  localStorage.setItem("user", JSON.stringify(user));
                  navigate('/detail')
                }}>View Profile</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default TableUsers
