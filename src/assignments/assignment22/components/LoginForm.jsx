
import { useToggle } from '../hooks/useToggle';

export const LoginForm = () => {
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm max-w-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Login Form</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email Address</label>
          <input type="email" placeholder="you@example.com" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white pr-16"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200"
            >
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Submit</button>
      </div>
    </div>
  );
};