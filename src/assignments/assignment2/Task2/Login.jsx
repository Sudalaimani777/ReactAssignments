import { useNavigate } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/assignment2/task2")
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-blue-300 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4 outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6 outline-none focus:border-blue-500"
        />
        <button onClick={handleNavigate} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </section>
  );
};

export default Login;