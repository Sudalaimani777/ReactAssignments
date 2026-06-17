import { useState } from "react";
import SalaryUpdate from "./SalaryUpdate";

const App = () => {
  const [salary, setSalary] = useState(25000);

  const handleIncreaseSalary = () => {
    setSalary((prevSalary) => prevSalary + 5000);
  };

  return <SalaryUpdate salary={salary} handleIncreaseSalary={handleIncreaseSalary} />;
};

export default App;
