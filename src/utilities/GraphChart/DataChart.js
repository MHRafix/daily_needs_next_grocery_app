import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

export default function DataChart() {
  ChartJS.register(
    CategoryScale,
    LineController,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    Title
  );

  //data for bar chart
  const data = {
    labels: [
      "Jun-1",
      "Jun-2",
      "Jun-3",
      "Jun-4",
      "Jun-5",
      "Jun-6",
      "Jun-7",
      "Jun-8",
      "Jun-9",
      "Jun-10",
      "Jun-11",
      "Jun-12",
      "Jun-13",
      "Jun-14",
      "Jun-15",
      "Jun-16",
      "Jun-17",
      "Jun-18",
      "Jun-19",
      "Jun-20",
      "Jun-21",
      "Jun-22",
      "Jun-23",
      "Jun-24",
      "Jun-25",
      "Jun-26",
      "Jun-27",
      "Jun-28",
      "Jun-29",
      "Jun-30",
    ],
    label: "Purchased / Day",
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgb(40 214 148)",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgb(40 214 148)",
        pointHoverBorderColor: "rgb(40 214 148)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [
          65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62, 65, 59, 55, 40, 57,
          40, 48, 1, 62, 55, 40, 57, 40, 48, 59, 100, 110, 140, 150,
        ],
      },
    ],
  };

  return (
    <>
      <h1 className="text-normal text-black2 tracking-wide my-5 font-semibold">
        {data.label}
      </h1>
      <Line data={data} />
    </>
  );
}
