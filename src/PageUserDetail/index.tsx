import React from "react";
import {User} from "../PageUsers/@types";
import PageUserDetailHeader from "./PageUserDetailHeader";

interface PageUserDetailProps {
  users: User[];
}

const PageUserDetail = ({users}: PageUserDetailProps) => {
  const userData = localStorage.getItem("user");
  if (!userData) return <div>Usuário não encontrado</div>
  const user = JSON.parse(userData);

  return (
    <div className='pageUserDetail'>
      <button
        className='pageUserDetail__button'
        onClick={() => {
          localStorage.removeItem("user");
          window.history.back();
        }}
      >Back</button>
      <PageUserDetailHeader users={user}/>
    </div>
  )
}

export default PageUserDetail
