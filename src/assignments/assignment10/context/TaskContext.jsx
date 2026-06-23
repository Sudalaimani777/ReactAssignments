import { createContext, useState } from "react"

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [taskData, setTaskData] = useState({ taskTitle: "", taskDescription: "" });
    const [allTask, setAllTask] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);

    // Task Change Function
    const handleTaskChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value })
    }

    // Add Function
    const handleAddTask = (e) => {
        e.preventDefault();
        setAllTask(prevTask => [...prevTask, taskData]);
        setTaskData({ taskTitle: "", taskDescription: "" });
        console.log(allTask);
    }

    // Edit Function
    const handleEditTask = (task, taskIdx) => {
        setTaskData(task);
        setEditTaskId(taskIdx);
        // alert(taskIdx);
    }

    // Delete Function :-
    const handleDeleteTask = (idx) => {
        setAllTask(prevTask => prevTask.filter((_, index) => index !== idx))
    }

    // Update Function :-
    const handleUpdateTask = (e) => {
        e.preventDefault();
        setAllTask(prevTask => prevTask.map((task, idx) => idx === editTaskId ? taskData  : task));
        setEditTaskId(null);
        setTaskData({ taskTitle: "", taskDescription: "" })
        console.log(allTask);
    }

    return (
        <TaskContext.Provider
            value={{
                taskData,
                handleTaskChange,
                handleAddTask,
                allTask,
                handleEditTask,
                handleDeleteTask,
                handleUpdateTask,
                editTaskId
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext
