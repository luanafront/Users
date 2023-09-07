import InputSearcher from "./InputSearcher";

const PageUsersHeader = () => {
  return (
    <header className='pageUsersHeader'>
      <h1 className='pageUsersHeader__title'>List Users</h1>
      <InputSearcher label={'Searcher user...'}/>
    </header>
  )
}

export default PageUsersHeader
