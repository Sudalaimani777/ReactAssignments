import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const CourseSelection = ({ course, handleCourseChange }) => {
  return (
    <TaskCard
      taskNumber="11"
      title="Course Selection"
      description="Change the selected course from MERN to React Native."
      actions={<PrimaryButton onClick={handleCourseChange}>Change Course</PrimaryButton>}
    >
      <ValueTile label="Selected Course" value={course} tone="violet" />
    </TaskCard>
  );
};

export default CourseSelection;
