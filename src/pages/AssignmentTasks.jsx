import { Link, useParams } from "react-router-dom";
import { assignments } from "../data/assignmentsList";

const AssignmentTasks = () => {
  const { assignmentId } = useParams(); 
  const assignment = assignments.find((a) => a.id === assignmentId);

  if (!assignment) return <p className="p-6">Assignment not found</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Assignments
      </Link>
      <h1 className="text-2xl font-bold mb-4">{assignment.title} - Tasks</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {assignment.tasks.map((task) => (
          <Link
            key={task.id}
            to={task.path}
            className="bg-green-600 text-white p-4 text-center hover:bg-green-700 rounded-2xl"
          >
            {task.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AssignmentTasks;