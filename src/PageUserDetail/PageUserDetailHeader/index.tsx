import React from "react";
import {User} from "../../PageUsers/@types";
import '../style.css'

interface PageUserDetailHeaderProps {
  users: User[];
}

const PageUserDetailHeader = ({users}: PageUserDetailHeaderProps) => {
  const userData = localStorage.getItem("user");
  if (!userData) return <div>Usuário não encontrado</div>
  const user = JSON.parse(userData);

  return (
    <div className='pageUserDetailHeader'>
      <img className='pageUserDetailHeader__img' src={user.picture.large} alt="user"/>
      <p className='pageUserDetailHeader__name'>{user.name.first} {user.name.last}</p>
      <p className='pageUserDetailHeader__title'>{user.name.title}</p>
    </div>
  )
}

export default PageUserDetailHeader
