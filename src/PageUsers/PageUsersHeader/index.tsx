import InputSearcher from "./InputSearcher";
import {User} from "../@types";

interface PageUsersHeaderProps {
  setUsers: (users: User[]) => void;
  users: User[];
}
const PageUsersHeader = ({setUsers, users}: PageUsersHeaderProps) => {
  return (
    <header className='pageUsersHeader'>
      <h1 className='pageUsersHeader__title'>List Users</h1>
      <div className='pageUsersHeader__boxInput'>
        <InputSearcher label={'Searcher user...'} setUsers={setUsers} users={users}/>
      </div>
    </header>
  )
}

export default PageUsersHeader
