import { useState } from "react";
import AttendanceTracker from "./AttendanceTracker";

const App = () => {
  const [attendance, setAttendance] = useState(0);

  const handleAttendance = () => {
    setAttendance((prevAttendance) => prevAttendance + 1);
  };

  return (
    <AttendanceTracker attendance={attendance} handleAttendance={handleAttendance} />
  );
};

export default App;
