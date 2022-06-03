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

export default function DataChart({ data }) {
  ChartJS.register(
    CategoryScale,
    LineController,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    Title
  );

  return (
    <div className="!px-1 h-per_10">
      <Line data={data} />
    </div>
  );
}
