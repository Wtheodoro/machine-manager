import { ReactNode } from 'react';

import { Container } from './styles';

interface CompaniesProps {
  children: ReactNode;
}

function Companies({ children }: CompaniesProps) {
  return (
    <Container>
      <h1>Companies</h1>
      {children}
    </Container>
  );
};

export default Companies;
