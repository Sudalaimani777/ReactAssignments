import { ToggleProvider } from './context/ToggleContext';
import Container from './components/Container';

export default function App() {
  return (
    <ToggleProvider>
      <Container />
    </ToggleProvider>
  );
}
