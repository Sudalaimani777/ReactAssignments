import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600 tracking-wide">AuthPortal</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-sm font-semibold text-gray-700">{currentUser?.userName || "User"}</span>
                <span className="text-xs text-gray-500">{currentUser?.userEmail}</span>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Dashboard */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 sm:p-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Welcome back, {currentUser?.userName || "User"}! 👋
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Here is what is happening with your secure dashboard account today.
              </p>
            </div>
          </div>

          {/* Dummy Analytics Grid Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-gray-50 px-4 py-5 sm:p-6 border border-gray-200/60">
              <dt className="truncate text-sm font-medium text-gray-500">Account Status</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-600">Active</dd>
            </div>
            <div className="overflow-hidden rounded-xl bg-gray-50 px-4 py-5 sm:p-6 border border-gray-200/60">
              <dt className="truncate text-sm font-medium text-gray-500">Security Clearence</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">Verified</dd>
            </div>
            <div className="overflow-hidden rounded-xl bg-gray-50 px-4 py-5 sm:p-6 border border-gray-200/60">
              <dt className="truncate text-sm font-medium text-gray-500">Session Mode</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-blue-600">LocalStorage</dd>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;