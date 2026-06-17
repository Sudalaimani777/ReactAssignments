import TaskCard, { DetailList, PrimaryButton } from "../shared/TaskCard";

const UserDataLoading = ({ user, handleLoadUser }) => {
  return (
    <TaskCard
      taskNumber="7"
      title="User Data Loading"
      description="Load a user object into state and show the user information on demand."
      actions={<PrimaryButton onClick={handleLoadUser}>Load User</PrimaryButton>}
    >
      {user ? (
        <DetailList
          items={[
            { label: "Name", value: user.name },
            { label: "City", value: user.city },
          ]}
        />
      ) : (
        <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-slate-300">
          No user loaded yet.
        </p>
      )}
    </TaskCard>
  );
};

export default UserDataLoading;
