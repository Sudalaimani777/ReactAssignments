import { createContext, useState, useEffect } from "react"
import { taskData } from "../data/taskData";



const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState(taskData);
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false
    });
    const apiUrl = import.meta.env.VITE_MOCK_API_URL;
    console.log(apiUrl);
    console.log(task);

    // Load All Task :-
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const storedTask = data.reverse()
                setTask(storedTask);
            } catch (err) {
                console.log(err);
            }
        }
        fetchTask()
    }, [apiUrl]);

    // Add Task :-
    const handleAddTask = async (newTask) => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });
            const data = await response.json();
            setTask(prevTask => [...prevTask, data])
        } catch (err) {
            console.log(err);
        }
    }

    // Edit Task :-
    const handleEditTask = (task) => {
        setTaskEdit({
            task: task,
            edit: true
        })
    }

    // Delete Task :-
    const handleDeleteTask = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            setTask(prevTask => prevTask.filter(task => task.id !== id))
        } catch (err) {
            console.log(err);
        }
    }

    // Update Task :-
    const handleUpdateTask = async (id, updatedTask) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask)
            })
            const data = await response.json();
            setTask(prevTask => prevTask.map(task => task.id === id ? { ...task, ...data } : task))
        } catch (err) {
            console.log(err);
        }
    }

    // Clear Edit :-
    const handleClearEdit = () => {
        setTaskEdit({
            task:{},
            edit:false
        })
    }

    return (
        <TaskContext.Provider value={{task, handleAddTask, handleEditTask, handleDeleteTask, handleUpdateTask, handleClearEdit, taskEdit}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;