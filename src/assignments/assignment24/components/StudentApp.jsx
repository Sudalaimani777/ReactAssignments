import { useReducer } from 'react';
import { studentReducer, initialState } from '../reducer/studentReducer';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const StudentApp = () => {
    const [state, dispatch] = useReducer(studentReducer, initialState);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
            <h2>Student Management System</h2>

            <StudentForm
                studentName={state.studentName}
                editingId={state.editingId}
                dispatch={dispatch}
            />

            <StudentList
                students={state.students}
                dispatch={dispatch}
            />
        </div>
    );
};

export default StudentApp;