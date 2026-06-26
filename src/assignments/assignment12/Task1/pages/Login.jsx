import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"


const Login = () => {
  

    const {handleUserLogin, handleUserLoginInputChange, loginUserData} = useContext(UserLoginContext);

  return (
    <>
      <section>
        <form onSubmit={handleUserLogin}>
          <input 
            type="email"
            name="userEmail"
            value={loginUserData.userEmail}
            required
            placeholder="Enter Email"
            onChange={handleUserLoginInputChange}
          />
          <input 
            type="password" 
            name="userPassword"
            value={loginUserData.userPassword}
            required
            placeholder="Enter Password"
            onChange={handleUserLoginInputChange}
          />
          <button>Login</button>
        </form>
      </section>
    </>
  )
}

export default Login
