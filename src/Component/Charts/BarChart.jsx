import React from "react";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    datasets: [
      {
        label: "Visitors",

        data: [80, 50, 27, 51, 35, 20],

        backgroundColor: "rgb(0,0,0)",

        borderColor: "rgb(0,0,0)",

        borderWidth: 1,
      },
    ],
  };

  const options = {
    barThickness: 2,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        type: "linear",

        beginAtZero: true,

        stepSize: 10,

        max: 100,

        grid: {
          display: false,

          offset: true,
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={data} options={options} />{" "}
    </div>
  );
};

export default BarChart;
