import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { TaskProvider } from "./context/TaskContext"

const App = () => {
    return (
        <TaskProvider>
            <div className="min-h-screen bg-slate-100 text-slate-900">
                <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
                    <TaskForm />
                    <TaskList />
                </main>
            </div>
        </TaskProvider>
    )
}

export default App
