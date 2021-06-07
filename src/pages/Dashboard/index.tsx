import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import LittleInfoCard from '../../components/Cards/LittleInfoCard';
import SemiCircleChart from '../../components/Charts/SemiCircleChart';
import ProgressBar from '../../components/dashboardComponents/ProgressBar';

import {GrTechnology} from 'react-icons/gr'

import { Container, Content } from './styles';
import Title from '../../components/headings/Title';
import LatestUpdates from '../../components/dashboardComponents/LatestUpdates';
import TheCrew from '../../components/dashboardComponents/TheCrew';
import Disclosure from '../../components/dashboardComponents/Disclosure';
import DashBoardCard from '../../components/Cards/DashBoardCard';

const Dashboard: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Dashboard</Title>

      <Content>
        <DashBoardCard />
        <SemiCircleChart />
        <div>
          <ProgressBar title="Reduced maintenance costs" goal={24000.00} current={17000.00} unit="R$"/>
          <div className="little-cards">
            <LittleInfoCard icon={<GrTechnology/>} title="New assets" value="+ 2"/>
            <LittleInfoCard icon={<GrTechnology/>} title="New assets" value="+ 2"/>
          </div>
        </div>
        <TheCrew />
        <LatestUpdates />
        <Disclosure />
      </Content>
      
    </Container>
  )
}

export default Dashboard;