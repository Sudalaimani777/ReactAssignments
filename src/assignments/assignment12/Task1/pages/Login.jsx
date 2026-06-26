import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"

const Login = () => {
  const { handleUserLogin, handleUserLoginInputChange, loginUserData } = useContext(UserLoginContext);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Header section for professional branding */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Please enter your details to sign in.
            </p>
          </div>

          <form onSubmit={handleUserLogin} className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md">
              
              {/* Email Input */}
              <div>
                <label htmlFor="userEmail" className="block text-sm font-medium text-slate-700 mb-1">
                  Email address
                </label>
                <input 
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  value={loginUserData.userEmail}
                  required
                  placeholder="you@example.com"
                  onChange={handleUserLoginInputChange}
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
                  value={loginUserData.userPassword}
                  required
                  placeholder="••••••••"
                  onChange={handleUserLoginInputChange}
                  className="block w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-150 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm"
                />
              </div>
            </div>

            {/* Additional realistic UI elements to blend seamlessly as human-built */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-slate-600 cursor-pointer select-none">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
              >
                Sign In
              </button>
            </div>
          </form>
          
        </div>
      </section>
    </>
  )
}

export default Login