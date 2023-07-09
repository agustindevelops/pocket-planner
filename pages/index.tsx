import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Index from '../components/Layout';

const HomePage = () => (
  <Index>
    <Welcome />
    <ColorSchemeToggle />
  </Index>
);

export default HomePage;
