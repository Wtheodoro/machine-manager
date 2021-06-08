import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';

const SemiCircleChart: React.FC = () => {

  const options = {
    chart: {
      width: 200,
      height: 200,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: '#F9F9F9'
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: 25
      },
      y: 40
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -5,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -140,
        endAngle: 140,
        center: ['50%', '75%'],
        size: '95%',
        y: '50%'
      }
    },

    series: [
      {
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: [
          { name: 'In Operation', y: 3, color: '#18d217' },
          { name: 'In Alert', y: 5, color: '#FFC035' },
          { name: 'In Downtime', y: 2, color: '#ff3440' },
        ]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          }
        }
      ]
    }
  };


  return (
    <S.Container>
      <SubTitle>Assets Statistics</SubTitle>

      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <S.Info>
          <h2>Status</h2>
          <p>3 In Operation</p>
          <p>5 In Alert</p>
          <p>2 In Downtime</p>
        </S.Info>
      </div>
    </S.Container>
  )
}

export default SemiCircleChart;