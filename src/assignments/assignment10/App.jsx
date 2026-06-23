import DisplayTask from "./components/DisplayTask";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <main className="min-h-screen bg-[#050816] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-violet-500/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-500/20 blur-[150px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl font-black text-white text-center">
              TaskFlow
            </h1>

            <p className="text-center text-gray-400 mt-4">
              Organize your work beautifully.
            </p>

            <TaskForm />
            <DisplayTask />
          </div>
        </div>
      </main>
    </TaskProvider>
  );
};

export default App;