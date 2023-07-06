import { ReactNode } from 'react';
import { HeaderSimple } from './Header/Home';

const Layout = ({ children }: { children: ReactNode }) => {
  const links = [
    {
      link: '/register',
      label: 'Register',
    },
    {
      link: '/login',
      label: 'Log In',
    },
  ];
  return (
    <div>
      <HeaderSimple links={links} />
      {children}
    </div>
  );
};

export default Layout;
