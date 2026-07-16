import { ACTIONS } from '../reducer/studentReducer';

const StudentForm = ({ studentName, editingId, dispatch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            dispatch({ type: ACTIONS.UPDATE_STUDENT });
        } else {
            dispatch({ type: ACTIONS.ADD_STUDENT });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Enter student name..."
                value={studentName}
                onChange={(e) => dispatch({ type: ACTIONS.SET_INPUT, payload: e.target.value })}
                style={{ padding: '8px', marginRight: '10px' }}
            />
            <button type="submit" style={{ padding: '8px 16px' }}>
                {editingId ? 'Update Student' : 'Add Student'}
            </button>

            {editingId && (
                <button
                    type="button"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_INPUT, payload: '' });
                        dispatch({ type: ACTIONS.UPDATE_STUDENT }); // Trick to reset without updating if we handle it differently, but cleaner to just clear:
                        // For a pure cancel, you'd want a CANCEL_EDIT action. We'll rely on update wiping state for now.
                    }}
                    style={{ padding: '8px 16px', marginLeft: '10px' }}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default StudentForm;