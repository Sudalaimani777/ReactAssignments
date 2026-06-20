import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TaskContext from "../context/TaskContext";
import Button from "../shared/Button";

const TaskForm = () => {
    const [text, setText] = useState("");
    const [btnDisable, setBtnDisable] = useState(true);
    const [errMessage, setErrMessage] = useState("");
    const { handleAddTask, handleUpdateTask, handleClearEdit, taskEdit, task } = useContext(TaskContext);

    const handleTask = (e) => {
        const trimmedTask = e.target.value.trimStart();

        if (trimmedTask.length < 3) {
            setErrMessage("Enter at least 3 characters.");
            setBtnDisable(true);
        } else {
            setErrMessage("");
            setBtnDisable(false);
        }

        setText(trimmedTask);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (taskEdit.edit === true) {
            handleUpdateTask(taskEdit.task.id, { ...taskEdit.task, text });
            handleClearEdit();
        } else {
            const taskData = {
                id: uuid(),
                text
            };
            handleAddTask(taskData);
        }

        setText("");
        setBtnDisable(true);
        setErrMessage("");
    };

    useEffect(() => {
        if (taskEdit.edit === true) {
            setText(taskEdit.task.text);
            setBtnDisable(false);
            setErrMessage("");
        }
    }, [taskEdit]);

    const isEditing = taskEdit.edit === true;

    return (
        <section className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Todo List</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Add, update, and manage your tasks.
                    </p>
                </div>
                <div className="text-sm text-slate-500">
                    {task.length} {task.length === 1 ? "task" : "tasks"}
                </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3">
                <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">
                        {isEditing ? "Edit task" : "New task"}
                    </span>
                    <textarea
                        value={text}
                        onChange={handleTask}
                        placeholder="Enter your task here"
                        rows="4"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                    />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className={`text-sm ${errMessage ? "text-red-600" : "text-slate-500"}`}>
                        {errMessage || "Keep your task short and clear."}
                    </p>
                    <Button type="submit" isDisabled={btnDisable}>
                        {isEditing ? "Update Task" : "Add Task"}
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default TaskForm
