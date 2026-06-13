import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AssignmentTasks from "../pages/AssignmentTasks";
import { assignments } from "../data/assignmentsList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:assignmentId" element={<AssignmentTasks />} />
      {assignments.map((a) =>
        a.tasks.map((task) => (
          <Route key={task.path} path={task.path} element={<task.component />} />
        ))
      )}
    </Routes>
  );
};

export default AppRoutes;