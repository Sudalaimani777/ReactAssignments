import { useState } from "react";
import ProfileVisibility from "./ProfileVisibility";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <ProfileVisibility showProfile={showProfile} handleShowProfile={handleShowProfile} />
  );
};

export default App;
