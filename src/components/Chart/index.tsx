import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown'

drilldown(Highcharts);

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Dashboard'
  },
  xAxis: {
    type: 'category'
  },
  legend: {
    enabled: false
  },
  series: [
    {
      name: 'Assets',
      colorByPoint: true,
      data: [
        {
          name: 'Alert',
          y: 5,
          drilldown: 'inAlert'
        },
        {
          name: 'Operating',
          y: 3,
          drilldown: 'inOperation'
        },
        {
          name: 'Downtime',
          y: 2,
          drilldown: 'inDowntime'
        }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        id: 'inAlert',
        data: [['Motor H13D', 1], ['Ventilador serie D', 4]]
      },
      {
        id: 'inOperation',
        data: [['Motor H13D', 2], ['Ventilador serie D', 1]]
      },
      {
        id: 'inDowntime',
        data: [['Motor H13D', 1], ['Ventilador serie D', 1]]
      }
    ]
  }
};

const Chart: React.FC = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>
);

export default Chart