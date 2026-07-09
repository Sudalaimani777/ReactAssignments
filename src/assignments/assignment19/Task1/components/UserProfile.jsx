import { useContext } from "react"
import UserDataContext from "../context/UserDataContext"

const UserProfile = () => {

  const { userData } = useContext(UserDataContext);

  return (
    <>
      <section>
        <h1>Name:{userData.name}</h1>
        <h1>Email:{userData.email}</h1>
        <h1>Role:{userData.role}</h1>
      </section>
    </>
  )
}

export default UserProfile