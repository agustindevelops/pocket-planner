import { ReactNode } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
