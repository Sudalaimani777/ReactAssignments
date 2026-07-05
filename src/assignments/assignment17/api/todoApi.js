import api from "./axios";

// Get Task :-
export const getTask = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Get Task by Id :-
export const getTaskById = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

// Create Task :-
export const createTask = async (task) => {
    try {
        const response = await api.post("/", task);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Update Task :-
export const updateTask = async (taskId, updatedTask) => {
    try {
        const response = await api.put(`/${taskId}`, updatedTask);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Delete Task :-
export const deleteTask = async (taskId) => {
    try {
        await api.delete(`/${taskId}`)
    } catch (err) {
        console.log(err);
    }
}