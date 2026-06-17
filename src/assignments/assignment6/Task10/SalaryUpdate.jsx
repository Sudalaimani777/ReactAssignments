import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const SalaryUpdate = ({ salary, handleIncreaseSalary }) => {
  return (
    <TaskCard
      taskNumber="10"
      title="Salary Update"
      description="Start with a salary of 25000 and increase it by 5000 on every click."
      actions={<PrimaryButton onClick={handleIncreaseSalary}>Increase Salary</PrimaryButton>}
    >
      <ValueTile label="Updated Salary" value={`₹${salary.toLocaleString("en-IN")}`} tone="amber" />
    </TaskCard>
  );
};

export default SalaryUpdate;
