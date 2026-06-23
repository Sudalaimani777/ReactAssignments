import UserCard from "./components/UserCard";
import withBackgroundColor from "./hoc/withBackgroundColor";

const BlueUserCard = withBackgroundColor(UserCard, "blue");

function App() {
  return (
    <BlueUserCard
      name="Sudalai"
      role="Frontend Developer"
    />
  );
}

export default App;