import { useEffect, useState } from "react";
import useTaskStore from "../store/todoStore";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const {
    createTask,
    updateTask,
    editingTask,
    setEditingTask,
  } = useTaskStore();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      await updateTask(editingTask.id, {
        ...editingTask,
        title,
      });

      setEditingTask(null);
    } else {
      await createTask({
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    }

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition-all duration-200
            ${editingTask
              ? "border-amber-300 bg-amber-50/30 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:border-amber-900/40 dark:bg-amber-950/10 dark:text-amber-100 dark:focus:border-amber-500 dark:focus:ring-amber-950"
              : "border-slate-200 bg-slate-50/50 text-slate-900 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:bg-slate-900 dark:focus:ring-indigo-950/50"
            }`}
        />
        {editingTask && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Editing
          </span>
        )}
      </div>

      <div className="flex gap-2 sm:shrink-0">
        <button
          type="submit"
          className={`flex-1 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm transition-all duration-150 active:scale-[0.98] sm:flex-none
            ${editingTask
              ? "bg-amber-500 text-white hover:bg-amber-600 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-900"
              : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-200 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-950"
            }`}
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={() => {
              setEditingTask(null);
              setTitle("");
            }}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;