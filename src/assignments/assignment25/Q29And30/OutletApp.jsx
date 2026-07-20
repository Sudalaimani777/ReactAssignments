import { Route, Routes } from "react-router-dom";
import { AppLayout, ProtectedRoute } from "./Outlet";
import DashboardComponent from "./DashboardComponent";

// Usage in router setup
const OutletApp = () => {
  const isAuth = true; 
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuth}>
            <DashboardComponent />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};
export default OutletApp;