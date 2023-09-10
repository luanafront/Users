import React from "react";
import {User} from "../PageUsers/@types";
import {useParams} from "react-router-dom";

interface PageUserDetailProps {
  users: User[];
}

const PageUserDetail = ({users}: PageUserDetailProps) => {
  const userData = localStorage.getItem("user");
  if (!userData) return <div>Usuário não encontrado</div>
  const user = JSON.parse(userData);

  return (
    <div style={{color: 'red'}}>
      <div>
        <img src={user.picture.large} alt="user"/>
        <p>{user.name.first} {user.name.last}</p>
        <p>{user.name.title}</p>
      </div>
      <div>
        <p>Info</p>
        <p></p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default PageUserDetail
