import { useContext } from "react"
import TaskContext from "../context/TaskContext"
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskList = () => {
    const { task, handleDeleteTask, handleEditTask } = useContext(TaskContext);

    return (
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Tasks</h2>
                <span className="text-sm text-slate-500">
                    {task?.length || 0} {task?.length === 1 ? "item" : "items"}
                </span>
            </div>

            {!task || task.length === 0 ? (
                <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center">
                    <p className="text-sm text-slate-500">No tasks added yet.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {task.map((task) => (
                        <article
                            key={task.id}
                            className="flex flex-col gap-3 rounded-lg border border-slate-200 px-4 py-4 sm:flex-row sm:items-start sm:justify-between"
                        >
                            <p className="text-sm leading-6 text-slate-800 break-words sm:text-base">
                                {task.text}
                            </p>

                            <div className="flex items-center gap-2 self-end sm:self-auto">
                                <button
                                    type="button"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:bg-slate-100"
                                    onClick={() => handleEditTask(task)}
                                    aria-label="Edit task"
                                >
                                    <FaEdit size="14px" />
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:bg-slate-100"
                                    onClick={() => handleDeleteTask(task.id)}
                                    aria-label="Delete task"
                                >
                                    <FaTrash size="14px" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}

export default TaskList
