import TaskCard, { PrimaryButton, ValueTile } from "../shared/TaskCard";

const ThemeSwitch = ({ theme, handleTheme }) => {
  return (
    <TaskCard
      taskNumber="5"
      title="Theme Switch"
      description="Toggle the selected theme between dark mode and light mode."
      actions={<PrimaryButton onClick={handleTheme}>Switch Theme</PrimaryButton>}
    >
      <ValueTile label="Selected Theme" value={theme ? "Dark Mode" : "Light Mode"} tone="violet" />
    </TaskCard>
  );
};

export default ThemeSwitch;
