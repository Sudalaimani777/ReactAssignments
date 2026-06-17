import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const EmployeeStatus = ({ isActive, handleEmployeeStatus }) => {
  return (
    <TaskCard
      taskNumber="12"
      title="Employee Status"
      description="Use a boolean state to switch the employee from inactive to active."
      actions={<PrimaryButton onClick={handleEmployeeStatus}>Activate Employee</PrimaryButton>}
    >
      <ValueTile label="Current Status" value={isActive ? "Active" : "Inactive"} tone={isActive ? "emerald" : "rose"} />
    </TaskCard>
  );
};

export default EmployeeStatus;
