import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const AgeIncrement = ({ age, handleChangeAge }) => {
  return (
    <TaskCard
      taskNumber="3"
      title="Age Increment"
      description="Increase the age by one each time the button is clicked."
      actions={<PrimaryButton onClick={handleChangeAge}>Increment Age</PrimaryButton>}
    >
      <ValueTile label="Current Age" value={age} tone="amber" />
    </TaskCard>
  );
};

export default AgeIncrement;
