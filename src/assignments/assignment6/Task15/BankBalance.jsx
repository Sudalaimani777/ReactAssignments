import TaskCard, { PrimaryButton, SecondaryButton, ValueTile } from "../shared/TaskCard";

const BankBalance = ({ balance, handleDeposit, handleWithdraw }) => {
  return (
    <TaskCard
      taskNumber="15"
      title="Bank Balance"
      description="Use deposit and withdraw buttons to update the bank balance state."
      actions={
        <>
          <PrimaryButton onClick={handleDeposit}>Deposit</PrimaryButton>
          <SecondaryButton onClick={handleWithdraw}>Withdraw</SecondaryButton>
        </>
      }
    >
      <ValueTile label="Available Balance" value={`₹${balance.toLocaleString("en-IN")}`} tone="emerald" />
    </TaskCard>
  );
};

export default BankBalance;
