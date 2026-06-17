import { useState } from "react";
import UserDataLoading from "./UserDataLoading";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLoadUser = () => {
    setUser({
      name: "Sudhan",
      city: "Chennai",
    });
  };

  return <UserDataLoading user={user} handleLoadUser={handleLoadUser} />;
};

export default App;
