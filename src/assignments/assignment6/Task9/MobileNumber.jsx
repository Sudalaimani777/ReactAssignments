import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const MobileNumber = ({ mobileNumber, handleAddMobileNumber }) => {
  return (
    <TaskCard
      taskNumber="9"
      title="Mobile Number"
      description="Store a mobile number in state and reveal it when requested."
      actions={<PrimaryButton onClick={handleAddMobileNumber}>Add Number</PrimaryButton>}
    >
      <ValueTile
        label="Mobile Number"
        value={mobileNumber ?? "Not added yet"}
        tone="emerald"
      />
    </TaskCard>
  );
};

export default MobileNumber;
