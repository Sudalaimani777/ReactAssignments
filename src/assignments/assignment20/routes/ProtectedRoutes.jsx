import { useContext } from "react"
import LoginContext from "../context/LoginContext"
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useContext(LoginContext);

  if (!currentUser) {
    return <Navigate to="/assignment/20/login" replace />

  }

  return children;
}

export default ProtectedRoutes