import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-50 gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to MyApp</h1>
      <p className="text-gray-500 text-lg">Please login or register to continue</p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/assignment2/task2/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/assignment2/task2/register")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Banner;