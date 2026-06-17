import { useState } from "react";
import EmployeeStatus from "./EmployeeStatus";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleEmployeeStatus = () => {
    setIsActive(true);
  };

  return <EmployeeStatus isActive={isActive} handleEmployeeStatus={handleEmployeeStatus} />;
};

export default App;
