import { ReactNode } from 'react';

import { Container } from './styles';

interface UsersProps {
  children: ReactNode;
}

function Users({ children }: UsersProps) {
  return (
    <Container>
      <h1>Users</h1>
      {children}
    </Container>
  );
};

export default Users;
