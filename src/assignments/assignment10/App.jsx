import DisplayTask from "./components/DisplayTask"
import TaskForm from "./components/TaskForm"
import { TaskProvider } from "./context/TaskContext"

const App = () => {
  return (
    <>
      <TaskProvider>
        <main>
          <TaskForm />
          <DisplayTask />
        </main>
      </TaskProvider>
    </>
  )
}

export default App
