import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';

import { Container } from './styles';

const Companies: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>hi from Companies</h1>
    </Container>
  )
}

export default Companies;