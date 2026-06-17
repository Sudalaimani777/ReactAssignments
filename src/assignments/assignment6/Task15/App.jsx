import { useState } from "react";
import BankBalance from "./BankBalance";

const App = () => {
  const [balance, setBalance] = useState(10000);

  const handleDeposit = () => {
    setBalance((prevBalance) => prevBalance + 1000);
  };

  const handleWithdraw = () => {
    setBalance((prevBalance) => prevBalance - 1000);
  };

  return (
    <BankBalance
      balance={balance}
      handleDeposit={handleDeposit}
      handleWithdraw={handleWithdraw}
    />
  );
};

export default App;
