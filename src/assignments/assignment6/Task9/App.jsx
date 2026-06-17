import { useState } from "react";
import MobileNumber from "./MobileNumber";

const App = () => {
  const [mobileNumber, setMobileNumber] = useState(null);

  const handleAddMobileNumber = () => {
    setMobileNumber(9876543210);
  };

  return (
    <MobileNumber
      mobileNumber={mobileNumber}
      handleAddMobileNumber={handleAddMobileNumber}
    />
  );
};

export default App;
