import { UserLoginProvider } from "./context/UserLoginContext"
import { UserRegisterProvider } from "./context/UserRegistrationContext"
import Approutes from "./routes/Approutes"


const App = () => {

  return (
    <>
      <UserRegisterProvider>
        <UserLoginProvider>
          <Approutes />
        </UserLoginProvider>
      </UserRegisterProvider>
    </>
  )
}

export default App