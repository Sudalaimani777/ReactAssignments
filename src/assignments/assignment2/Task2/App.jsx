import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Login from "./Login";
import Register from "./Register";

const Task2App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Banner />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Task2App;