import { useEffect } from "react"
import useTaskStore from "../store/todoStore"
import { TaskForm, TaskList, SearchBar } from "../components/index"

const Home = () => {
  const { error, loading, fetchTask, tasks } = useTaskStore();
  console.log(tasks)

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  // Styled Loading State
  if (loading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-3">
        {/* Simple Tailwind Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400"></div>
        <h1 className="text-lg font-medium text-slate-600 dark:text-slate-400 animate-pulse">
          Loading tasks...
        </h1>
      </div>
    )
  }

  // Styled Error State
  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/30 dark:bg-red-950/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="mt-4 text-lg font-semibold text-red-900 dark:text-red-200">Something went wrong</h1>
          <p className="mt-2 text-sm text-red-700 dark:text-red-400 wrap-break-words">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto my-6 w-full max-w-3xl px-4 sm:my-12">
      {/* Dashboard Card Container */}
      <div className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-8">
        
        {/* Optional Header Section to pull the UI together */}
        <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Workspace
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your daily priorities and tracking.
          </p>
        </div>

        {/* Core Components */}
        <div className="space-y-6">
          <TaskForm />
          
          <div className="border-t border-slate-100 pt-6 dark:border-slate-800">
            <SearchBar />
          </div>
          
          <TaskList />
        </div>

      </div>
    </div>
  )
}

export default Home