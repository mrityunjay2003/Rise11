import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = () => {
  // Sample data for the donut chart
  const data = {
    labels: ["Current Week", "Last Week"],
    datasets: [
      {
        data: [2000, 1500],
        backgroundColor: ["rgb(202,163,172)", "rgb(194,163,253)"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  // Optional: Customize chart options
  const options = {
    cutout: 72,
  };

  return (
    <div>
      <h3>Sale</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
