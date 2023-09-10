import React from "react";
import './style.css';
import {User} from "../@types";
interface InputSearcherProps {
  label: string,
  setUsers: (users: User[]) => void,
  users: User[]
}


const InputSearcher = ({label, users, setUsers}: InputSearcherProps) => {
  const filterUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const usersFiltered = users.filter(user => {
      const name = `
      ${user.name.first} 
      ${user.name.last}
      ${user.name.title}
      ${user.id.value}     
      ${user.registered.date}
      ${user.registered.age}
      `.toLowerCase();
      return name.includes(value);
    })
    setUsers(usersFiltered);
  }

  return <input type="text" onChange={filterUsers} className='inputSearcher' placeholder={label}/>
}

export default InputSearcher
