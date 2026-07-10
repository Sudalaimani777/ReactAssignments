import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes" // Adjust the path to where your ProtectedRoutes file lives

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes;