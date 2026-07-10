import { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useContext(LoginContext);

  if (!currentUser) {
    return <Navigate to="/assignment/20/loginandregisterwithprotectedroutes/login" replace />;
  }

  // Add this line to render the protected content when currentUser exists
  return children;
};

export default ProtectedRoutes;