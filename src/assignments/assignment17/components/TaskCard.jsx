import { useState } from "react";
import useTaskStore from "../store/todoStore";

const TaskCard = ({ task }) => {
  const {
    deleteTask,
    updateTask,
    setEditingTask,
  } = useTaskStore();

  const [showDialog, setShowDialog] = useState(false);

  const handleToggle = async () => {
    await updateTask(task.id, {
      ...task,
      completed: !task.completed,
    })
  }

  const handleDelete = async () => {
    await deleteTask(task.id);
    setShowDialog(false);
  };

  return (
    <>
      <div className="border rounded-lg p-4 shadow flex justify-between items-center">

        <div className="flex items-center gap-4">

          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="w-5 h-5"
          />

          <div>

            <h2
              className={`text-lg font-semibold ${task.completed
                ? "line-through text-gray-400"
                : ""
                }`}
            >
              {task.title}
            </h2>

            <p
              className={`text-sm ${task.completed
                ? "text-green-600"
                : "text-orange-500"
                }`}
            >
              {task.completed
                ? "Completed"
                : "Pending"}
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button
            onClick={() => setEditingTask(task)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => setShowDialog(true)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>

        </div>

      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

          <div className="w-80 rounded-lg bg-white p-6 text-slate-900 shadow-xl">

            <h2 className="text-xl font-bold text-slate-900">
              Delete Task
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              Are you sure?
            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShowDialog(false)}
                className="rounded border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default TaskCard;