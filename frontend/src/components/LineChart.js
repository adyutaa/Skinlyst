import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    const data = {
      labels: xValues,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: 'red',
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: 'green',
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: 'blue',
          fill: false,
        },
      ],
    };

    const chartOptions = {
      legend: { display: false },
    };

    const ctx = chartRef.current.getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: chartOptions,
    });

    return () => {
      // Clean up the previous Chart instance before unmounting
      myChart.destroy();
    };
  }, []);

  return <canvas id="myChart" ref={chartRef} />;
};

export default LineChart;
