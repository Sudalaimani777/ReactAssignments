import { Outlet, Navigate } from 'react-router-dom';

// Q29: Layout component using an implicit return
export const AppLayout = () => (
  <div>
    <nav>My Navigation Bar</nav>
    <main>
      <Outlet />
    </main>
  </div>
);

// Q30: Auth wrapper component
export const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

