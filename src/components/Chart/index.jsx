import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';
import { Box } from '@material-ui/core';
import Tooltips from '../Tooltips';

Highcharts.setOptions({
  lang: {
    rangeSelectorZoom: ''
  }
});

const Chart = ({ chartData }) => {
  const [tooltipData, setTooltipData] = useState(null)
  const [tooltipTopPosition, setTooltipTopPosition] = useState(null)

  const handleSetTooltipInfo = (allPointData, top) => {
    setTooltipData(allPointData)
    setTooltipTopPosition(top)
  }

  const [options] = useState({
    navigator: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: true,
      selected: 2,
      allButtonsEnabled: true,
      labelStyle: {
        display: 'none',
        visibility: 'hidden',
      },
      buttonSpacing: 2,
      buttonPosition: {
        x: -6,
      },
      buttonTheme: {
        fill: 'none',
        stroke: 'none',
        'stroke-width': 0,
        r: 6,
        width: 40,
        height: 20,
        style: {
          color: '#a6aec2',
          fontWeight: '700',
          fontSize: '12px',
        },
        states: {
          hover: {
            fill: 'none',
            stroke: '#009919',
            'stroke-width': 1.5,
            r: 6,
            style: {
              color: '#009919'
            }
          },
          select: {
            fill: 'none',
            stroke: '#009919',
            'stroke-width': 1.5,
            r: 6,
            style: {
              color: '#009919'
            }
          }
        }
      },
      inputBoxBorderColor: '#e2e2e2',
      inputBoxWidth: 100,
      inputBoxHeight: 20,
      inputSpacing: 0,
      inputPosition: {
        x: 42
      },
      inputStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '12px',
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: '1D',
        },
        {
          type: 'week',
          count: 1,
          text: '1W',
        },
        {
          type: 'month',
          count: 1,
          text: '1M',
        },
        {
          type: 'month',
          count: 2,
          text: '3M',
        },
        {
          type: 'month',
          count: 3,
          text: '6M',
        },
        {
          type: 'year',
          count: 1,
          text: '1Y',
        },
        {
          type: 'year',
          count: 2,
          text: '2Y',
        },
        {
          type: 'year',
          count: 3,
          text: '5Y',
        },
        {
          type: 'all',
          text: 'ALL',
        }
      ]
    },
    title: {
      text: ''
    },
    chart: {
      height: 600,
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        id: 'line',
        data: chartData ? chartData.map(item => {
          const date = new Date(item.date)
          return {
            x: date.getTime(),
            y: item.close,
            allPointData: {
              open: item.open,
              high: item.high,
              low: item.low,
              close: item.close,
              volume: item.volume,
              change: item.change,
            }
          }
        }) : [],
        showInNavigator: false,
        yAxis: 0,
        color: '#c4c4c4',
        lineWidth: 0.5,
        marker: {
          fillColor: 'black',
          height: 1,
          lineColor: 'black',
          lineWidth: 1
        },
      },
      {
        type: 'column',
        id: 'volume',
        name: 'Volume',
        data: chartData ? chartData.map(item => {
          const date = new Date(item.date)
          return [date.getTime(), item.volume]
        }) : [],
        showInNavigator: false,
        yAxis: 1,
        linkedTo: 'line',
        color: '#24be05ac',
      },
    ],
    xAxis: {
      alternateGridColor: '#bbbbbb1a',
      crosshair: {
        width: 1.5,
        color: 'black',
        dashStyle: 'Dash',
      },
      tickColor: '#e2e2e2',
      lineColor: '#e2e2e2',
      minorTickLength: 7,
      tickLength: 7,
      minorTickPosition: 'outside',
      tickPosition: 'outside',
      labels: {
        y: 20,
        style: {
          color: 'black',
        }
      },
    },
    yAxis: [
      {
        height: '100%',
        tickWidth: 1,
        tickColor: '#e2e2e2',
        minorTickLength: 7,
        tickLength: 7,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        startOnTick: false,
        endOnTick: false,
        showLastLabel: true,
        crosshair: {
          width: 1.5,
          color: 'black',
          dashStyle: 'Dash',
        },
        gridLineWidth: 0,
        lineWidth: 1,
        lineColor: '#e2e2e2',
        title: {
          text: ''
        },
        labels: {
          align: 'left',
          allowOverlap: true,
          useHtml: true,
          x: 10,
          y: 4,
          style: {
            color: 'black',
          },
        },
      },
      {
        visible: false,
        height: '20%',
        top: '80%',
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
        title: {
          text: ''
        },
        labels: {
          align: 'left'
        },
      }
    ],
    plotOptions: {
      column: {
        states: {
          hover: {
            color: '#24be05',
          }
        }
      },
      series: {
        point: {
          events: {
            mouseOver: function () {
              if (this && this !== null && this.allPointData) {
                handleSetTooltipInfo(this.allPointData, this.plotY + 24)
              }
            },
            mouseOut: function () {
              handleSetTooltipInfo(null, null)
            }
          }
        },
      }
    },
    tooltip: {
      enabled: false,
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 603
        },
        chartOptions: {
          chart: {
            height: 420,
          },
          rangeSelector: {
            buttonPosition: {
              x: 5,
            },
            inputPosition: {
              x: 0
            },
          },
          yAxis: [{
            visible: false
          }]
        }
      }]
    }
  })

  return (
    <Box position={'relative'}>
      <HighchartsReact
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={options}
      />
      <Tooltips tooltipData={tooltipData} tooltipTopPosition={tooltipTopPosition} />
    </Box>
  )
}

export default Chart