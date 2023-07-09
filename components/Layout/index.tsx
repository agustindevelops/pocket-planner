import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import Header from './Header';

const Index = ({ children }: { children: ReactNode }) => (
  <AppShell header={<Header />}>{children}</AppShell>
);

export default Index;
