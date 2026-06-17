import TaskCard, { DetailList, PrimaryButton } from "../shared/TaskCard";

const ProfileVisibility = ({ showProfile, handleShowProfile }) => {
  return (
    <TaskCard
      taskNumber="14"
      title="Profile Visibility"
      description="Reveal profile information only after the boolean state becomes true."
      actions={<PrimaryButton onClick={handleShowProfile}>Show Profile</PrimaryButton>}
    >
      {showProfile ? (
        <DetailList
          items={[
            { label: "Name", value: "Sudhan" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Location", value: "Chennai" },
          ]}
        />
      ) : (
        <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-slate-300">
          Profile details are hidden.
        </p>
      )}
    </TaskCard>
  );
};

export default ProfileVisibility;
