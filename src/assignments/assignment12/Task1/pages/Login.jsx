import { useNavigate } from "react-router-dom"


const Login = () => {
  const navigate  = useNavigate();
  const handleClick = () => {
    navigate("../dashboard");
  }
  return (
    <div>Login
      <button onClick={handleClick}>Loin</button>
    </div>
  )
}

export default Login
