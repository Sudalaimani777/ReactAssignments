import TaskCard, { PrimaryButton, SecondaryButton, ValueTile } from "../shared/TaskCard";

const Counter = ({ count, handleInc, handleDec, handleReset }) => {
  return (
    <TaskCard
      taskNumber="1"
      title="Counter App"
      description="Increase, decrease, and reset the counter using React state."
      actions={
        <>
          <PrimaryButton onClick={handleInc}>Increase</PrimaryButton>
          <SecondaryButton onClick={handleReset}>Reset</SecondaryButton>
          <SecondaryButton onClick={handleDec}>Decrease</SecondaryButton>
        </>
      }
    >
      <ValueTile label="Current Count" value={count} tone="cyan" />
    </TaskCard>
  );
};

export default Counter;
