import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import LittleInfoCard from '../../components/Cards/LittleInfoCard';
import SemiCircleChart from '../../components/Charts/SemiCircleChart';
import ProgressBar from '../../components/dashboardComponents/ProgressBar';

import {GrTechnology} from 'react-icons/gr'

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

      <SemiCircleChart />

      <ProgressBar title="Reduced maintenance costs" goal={24000.00} current={17000.00} unit="R$"/>

      <LittleInfoCard icon={<GrTechnology/>} title="New assets" value="+ 2"/>
    </Container>
  )
}

export default Dashboard;