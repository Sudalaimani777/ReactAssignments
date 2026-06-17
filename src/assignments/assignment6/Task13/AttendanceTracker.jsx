import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const AttendanceTracker = ({ attendance, handleAttendance }) => {
  return (
    <TaskCard
      taskNumber="13"
      title="Attendance Tracker"
      description="Increase the attendance count every time the Present button is clicked."
      actions={<PrimaryButton onClick={handleAttendance}>Present</PrimaryButton>}
    >
      <ValueTile label="Total Attendance" value={attendance} tone="cyan" />
    </TaskCard>
  );
};

export default AttendanceTracker;
