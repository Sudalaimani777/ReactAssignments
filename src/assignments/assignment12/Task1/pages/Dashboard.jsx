import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"

const Dashboard = () => {
  const { currentUserData } = useContext(UserLoginContext);

  // Mock navigation items to make the layout feel like a production app
  const navigation = [
    { name: 'Overview', href: '#', current: true, icon: '📊' },
    { name: 'Analytics', href: '#', current: false, icon: '📈' },
    { name: 'Projects', href: '#', current: false, icon: '📁' },
    { name: 'Settings', href: '#', current: false, icon: '⚙️' },
  ];

  // Realistic sample data metrics
  const stats = [
    { name: 'Total Productivity', value: '84.2%', change: '+4.75%', changeType: 'positive' },
    { name: 'Active Projects', value: '12', change: '+2 new', changeType: 'positive' },
    { name: 'Hours Tracked', value: '38.5h', change: '-1.2h', changeType: 'negative' },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50/50 flex">
        
        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-slate-200 bg-white px-6 py-6">
          <div className="flex h-10 items-center px-2">
            <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              SaaSPlatform
            </span>
          </div>
          <nav className="mt-8 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  item.current
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="md:pl-64 flex flex-col flex-1 w-full">
          
          {/* Global Header */}
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Icon (hidden on desktop) */}
              <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                ☰
              </button>
              <h2 className="text-sm font-semibold text-slate-500 md:block hidden">Workspace / Overview</h2>
            </div>
            
            {/* User Profile Capsule */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">{currentUserData?.userName || 'User'}</p>
                <p className="text-xs text-slate-400">{currentUserData?.userEmail || 'developer@example.com'}</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-linear-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                {currentUserData?.userName ? currentUserData.userName.charAt(0).toUpperCase() : 'U'}
              </div>
            </div>
          </header>

          {/* Main Dashboard Canvas */}
          <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto">
            <section className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Welcome back, {currentUserData?.userName || 'Guest'} 👋
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Here is what is happening with your workspace today.
              </p>
            </section>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {stats.map((stat) => (
                <div key={stat.name} className="overflow-hidden rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <dt className="text-sm font-medium text-slate-500 truncate">{stat.name}</dt>
                  <dd className="mt-2 flex items-baseline justify-between sm:space-x-5">
                    <span className="text-3xl font-semibold tracking-tight text-slate-900">{stat.value}</span>
                    <span className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0 ${
                      stat.changeType === 'positive' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {stat.change}
                    </span>
                  </dd>
                </div>
              ))}
            </div>

            {/* Empty State / Modern Content Table Placeholder */}
            <div className="rounded-xl border border-dashed border-slate-300 bg-white/50 p-12 text-center">
              <span className="mx-auto block text-2xl mb-2">⚡</span>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">No recent anomalies</h3>
              <p className="mt-1 text-sm text-slate-500">Your systems are tracking completely fine. Start a new deployment to check logs.</p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                >
                  New Deployment
                </button>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard