
import { ACTIONS } from '../reducer/studentReducer';

const StudentList = ({ students, dispatch }) => {
    if (students.length === 0) {
        return <p>No students found. Please add some!</p>;
    }

    return (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
                <tr>
                    <th style={{ padding: '8px' }}>ID</th>
                    <th style={{ padding: '8px' }}>Name</th>
                    <th style={{ padding: '8px' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td style={{ padding: '8px' }}>{student.id}</td>
                        <td style={{ padding: '8px' }}>{student.name}</td>
                        <td style={{ padding: '8px' }}>
                            <button
                                onClick={() => dispatch({ type: ACTIONS.SET_EDIT_MODE, payload: student })}
                                style={{ marginRight: '8px' }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch({ type: ACTIONS.DELETE_STUDENT, payload: student.id })}
                                style={{ color: 'red' }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;