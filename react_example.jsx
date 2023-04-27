import React, { Component } from 'react';
import Chart from 'chart.js';

class TimeSeriesChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext("2d");

    // Define data for the chart
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My Dataset",
        data: [10, 20, 30, 40, 50, 60, 70]
      }]
    };

    // Define chart options
    const options = {
      responsive: true,
      title: {
        display: true,
        text: "My Time Series Chart"
      },
      scales: {
        xAxes: [{
          type: "time",
          time: {
            unit: "month"
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    // Create chart object
    new Chart(myChartRef, {
      type: "line",
      data: data,
      options: options
    });
  }

  render() {
    return (
      <div>
        <h1>Time Series Chart</h1>
        {/* Create canvas element for the chart */}
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default TimeSeriesChart;
