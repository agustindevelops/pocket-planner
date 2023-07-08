import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Layout from '../components/Layout/Layout';

const HomePage = () => (
  <Layout>
    <Welcome />
    <ColorSchemeToggle />
  </Layout>
);

export default HomePage;
