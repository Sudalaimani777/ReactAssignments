import { Route, Routes } from "react-router-dom"
import { Dashboard, Login, Register } from "../pages"


const Approutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default Approutes