import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskForm = () => {
  const {
    taskData,
    handleTaskChange,
    handleAddTask,
    editTaskId,
    handleUpdateTask,
  } = useContext(TaskContext);

  return (
    <section className="mt-12">
      <form className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Task Title
            </label>

            <input
              type="text"
              name="taskTitle"
              id="taskTitle"
              placeholder="Design Landing Page"
              onChange={handleTaskChange}
              value={taskData.taskTitle}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-violet-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Task Description
            </label>

            <input
              type="text"
              name="taskDescription"
              id="taskDescription"
              placeholder="Complete hero section before Friday"
              onChange={handleTaskChange}
              value={taskData.taskDescription}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          {editTaskId !== null ? (
            <button
              type="submit"
              onClick={handleUpdateTask}
              className="cursor-pointer px-8 py-3 rounded-xl bg-linear-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:scale-105 transition-all"
            >
              Update Task
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleAddTask}
              className="cursor-pointer px-8 py-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 transition-all"
            >
              Add Task
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default TaskForm;