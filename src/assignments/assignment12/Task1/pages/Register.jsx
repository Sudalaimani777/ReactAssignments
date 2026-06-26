import { useContext } from "react"
import UserRegisterContext from "../context/UserRegistrationContext"



const Register = () => {

  const { handleUserInputChange, userDataInputs, handleUserRegister } = useContext(UserRegisterContext)

  return (
    <>
      <section>
        <form onSubmit={handleUserRegister}>
          <input
            type="text"
            name="userName"
            value={userDataInputs.userName}
            onChange={handleUserInputChange}
            required
            placeholder="Enter Name"
          />
          <input
            type="email"
            name="userEmail"
            value={userDataInputs.userEmail}
            onChange={handleUserInputChange}
            required
            placeholder="Enter Email"
          />
          <input
            type="password"
            name="userPassword"
            value={userDataInputs.userPassword}
            onChange={handleUserInputChange}
            required
            placeholder="Enter Password"
          />
          <button>Register</button>
        </form>
      </section>
    </>
  )
}

export default Register