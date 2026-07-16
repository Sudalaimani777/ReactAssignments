export const initialState = {
    students: [],
    studentName: '',
    editingId: null,
};

export const ACTIONS = {
    SET_INPUT: 'SET_INPUT',
    ADD_STUDENT: 'ADD_STUDENT',
    SET_EDIT_MODE: 'SET_EDIT_MODE',
    UPDATE_STUDENT: 'UPDATE_STUDENT',
    DELETE_STUDENT: 'DELETE_STUDENT',
};

export const studentReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_INPUT:
            return {
                ...state,
                studentName: action.payload
            };

        case ACTIONS.ADD_STUDENT: { // <-- Added curly brace to create block scope
            if (!state.studentName.trim()) return state;

            const newStudent = {
                id: Date.now(),
                name: state.studentName.trim(),
            };

            return {
                ...state,
                students: [...state.students, newStudent],
                studentName: '',
            };
        } // <-- Closed curly brace

        case ACTIONS.SET_EDIT_MODE:
            return {
                ...state,
                studentName: action.payload.name,
                editingId: action.payload.id,
            };

        case ACTIONS.UPDATE_STUDENT: { // <-- Added curly brace to create block scope
            if (!state.studentName.trim()) return state;

            const updatedStudents = state.students.map((student) =>
                student.id === state.editingId
                    ? { ...student, name: state.studentName.trim() }
                    : student
            );

            return {
                ...state,
                students: updatedStudents,
                studentName: '',
                editingId: null,
            };
        } // <-- Closed curly brace

        case ACTIONS.DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload),
                studentName: state.editingId === action.payload ? '' : state.studentName,
                editingId: state.editingId === action.payload ? null : state.editingId,
            };

        default:
            return state;
    }
};