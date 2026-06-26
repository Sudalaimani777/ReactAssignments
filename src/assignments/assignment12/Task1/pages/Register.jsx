import { useNavigate } from "react-router-dom"


const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("login");
  }
  return (
    <div>Register
      <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default Register