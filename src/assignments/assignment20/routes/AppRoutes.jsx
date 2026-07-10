import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<ProtectedRoutes> <Dashboard /></ProtectedRoutes>} />
      </Routes>
    </>
  )
}

export default AppRoutes;