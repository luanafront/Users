import PageUsersHeader from "./PageUsersHeader";
import PageUsersMain from "./PageUsersMain";
import PageUsersFooter from "./PageUsersFooter";
import './style.css';

const PageUsers = () => {
  return (
    <div className='pageUsers'>
      <PageUsersHeader />
      <PageUsersMain />
      <PageUsersFooter />
    </div>
  )
}

export default PageUsers
