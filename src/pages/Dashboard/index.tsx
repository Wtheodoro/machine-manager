import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Hi from dashboard</h1>
    </Container>
  )
}

export default Dashboard;