import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"


const Dashboard = () => {

  const { currentUserData } = useContext(UserLoginContext);

  return (
    <>
      <section>
        <h1>Welcome {currentUserData?.userName}</h1>
      </section>
    </>
  )
}

export default Dashboard