import { UserDataProvider } from './context/UserDataContext'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <>
      <UserDataProvider>
        <UserProfile />
      </UserDataProvider>
    </>
  )
}

export default App