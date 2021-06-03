import { ReactNode } from 'react';

import { Container } from './styles';

interface UnitsProps {
  children: ReactNode;
}

function Units({ children }: UnitsProps) {
  return (
    <Container>
      <h1>Units</h1>
      {children}
    </Container>
  );
};

export default Units;
