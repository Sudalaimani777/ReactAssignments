import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const StudentNameChange = ({ handleStudentNameChange, studentName }) => {
  return (
    <TaskCard
      taskNumber="2"
      title="Student Name Change"
      description="Toggle the student name between the short and full version."
      actions={<PrimaryButton onClick={handleStudentNameChange}>Change Name</PrimaryButton>}
    >
      <ValueTile label="Student Name" value={studentName} tone="violet" />
    </TaskCard>
  );
};

export default StudentNameChange;
