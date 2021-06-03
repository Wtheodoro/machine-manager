import React from 'react';
import MainHeader from '../../components/MainHeader';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <h1>Hi from dashboard</h1>
    </Container>
  )
}

export default Dashboard;