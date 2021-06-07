import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { Container } from './styles';

const SemiCircleChart: React.FC = () => {

  const options = {
    chart: {
      width: 200,
      height: 200,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
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
          { name: 'In Alert', y: 5, color: '#18d217' },
          { name: 'In Operation', y: 3, color: '#FFC035' },
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
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  )
}

export default SemiCircleChart;