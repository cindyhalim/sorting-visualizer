import React from "react";
import Chart from "react-apexcharts";

export default function BarChart({ arrayValues }) {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      series: [
        {
          data: arrayValues
        }
      ]
    },
    yaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    xaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.chart.series}
        type="bar"
        height={600}
      />
    </div>
  );
}
