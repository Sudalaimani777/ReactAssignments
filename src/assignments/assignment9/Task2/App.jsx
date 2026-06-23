import Dashboard from "./components/Dashboard";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <ProtectedDashboard isLogin={false} />
  );
}

export default App;