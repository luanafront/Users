import InputSearcher from "./InputSearcher";

const PageUsersHeader = () => {
  return (
    <header className='pageUsersHeader'>
      <h1 className='pageUsersHeader__title'>List Users</h1>
      <div className='pageUsersHeader__boxInput'>
        <InputSearcher label={'Searcher user...'}/>
      </div>
    </header>
  )
}

export default PageUsersHeader
