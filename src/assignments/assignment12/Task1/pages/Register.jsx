import { useContext } from "react"
import UserRegisterContext from "../context/UserRegistrationContext"

const Register = () => {
  const { handleUserInputChange, userDataInputs, handleUserRegister } = useContext(UserRegisterContext)

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Header section for professional branding */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Get started with your 14-day free trial.
            </p>
          </div>

          <form onSubmit={handleUserRegister} className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md">
              
              {/* Name Input */}
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  value={userDataInputs.userName}
                  onChange={handleUserInputChange}
                  required
                  placeholder="John Doe"
                  className="block w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="userEmail" className="block text-sm font-medium text-slate-700 mb-1">
                  Email address
                </label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  value={userDataInputs.userEmail}
                  onChange={handleUserInputChange}
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="userPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  id="userPassword"
                  type="password"
                  name="userPassword"
                  value={userDataInputs.userPassword}
                  onChange={handleUserInputChange}
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
              >
                Register
              </button>
            </div>
          </form>
          
        </div>
      </section>
    </>
  )
}

export default Register