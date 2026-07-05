import { create } from "zustand";

import {
    getTask,
    createTask as createTaskApi,
    updateTask as updateTaskApi,
    deleteTask as deleteTaskApi,
} from "../api/todoApi";

const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,
    error: null,
    editingTask: null,
    searchTerm: "",

    // Fetch Tasks
    fetchTask: async () => {
        set({
            loading: true,
            error: null,
        });

        try {
            const tasks = await getTask();

            set({
                tasks,
                loading: false,
            });
        } catch (err) {
            set({
                error: err.message,
                loading: false,
            });
        }
    },

    // Create Task
    createTask: async (task) => {
        try {
            const newTask = await createTaskApi(task);

            set((state) => ({
                tasks: [...state.tasks, newTask],
            }));
        } catch (err) {
            set({
                error: err.message,
            });
        }
    },

    // Update Task
    updateTask: async (id, updatedTask) => {
        try {
            const task = await updateTaskApi(id, updatedTask);

            set((state) => ({
                tasks: state.tasks.map((t) =>
                    t.id === id ? task : t
                ),
            }));
        } catch (err) {
            set({
                error: err.message,
            });
        }
    },

    // Delete Task
    deleteTask: async (id) => {
        try {
            await deleteTaskApi(id);

            set((state) => ({
                tasks: state.tasks.filter(
                    (task) => task.id !== id
                ),
            }));
        } catch (err) {
            set({
                error: err.message,
            });
        }
    },

    // Editing Task
    setEditingTask: (task) => {
        set({
            editingTask: task,
        });
    },
    // Search Task :-
    searchTask: (taskText) => {
        set({
            searchTerm: taskText
        });
    }
}));

export default useTaskStore;