import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Course Sale",
        data: [1, 25, 60, 35, 60, 32, 7, 35, 13, 23, 21, 69],
        borderColor: "createLinearGradient()",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Course Visit",
        data: [12, 55, 43, 23, 65, 43, 17, 88, 23, 43, 1, 58],
        borderColor: "rgb(194,163,253)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Check if a Chart instance already exists and destroy it
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new Chart instance
    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Revenue",
            font: {
              size: 15,
              color: "red",
            },
            align: "start",
          },
        },
      },
    });
  }, [data]);

  const createLinearGradient = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(255, 0, 0, 0.5)"); // Start color (red with 50% opacity)
    gradient.addColorStop(1, "rgba(0, 0, 255, 0.5)"); // End color (blue with 50% opacity)
    return gradient;
  };

  return (
    <div style={{ width: "500px", height: "300px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
