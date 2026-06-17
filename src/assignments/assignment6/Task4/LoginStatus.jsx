import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const LoginStatus = ({ login, handleLoginStatusChange }) => {
  return (
    <TaskCard
      taskNumber="4"
      title="Login Status"
      description="Switch between logged-in and logged-out states with a boolean toggle."
      actions={
        <PrimaryButton onClick={handleLoginStatusChange}>
          {login ? "Logout" : "Login"}
        </PrimaryButton>
      }
    >
      <ValueTile
        label="Current Status"
        value={login ? "Successfully Logged In" : "Successfully Logged Out"}
        tone={login ? "emerald" : "rose"}
      />
    </TaskCard>
  );
};

export default LoginStatus;
