import { ReactNode } from 'react';

import { Container } from './styles';

interface AssetsProps {
  children: ReactNode;
}

function Assets({ children }: AssetsProps) {
  return (
    <Container>
      <h1>Assets</h1>
      {children}
    </Container>
  );
};

export default Assets;
