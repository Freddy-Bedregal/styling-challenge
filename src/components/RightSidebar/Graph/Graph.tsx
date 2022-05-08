import "./Graph.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { graphData } from "../../../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Graph() {
  return (
    <div className="graph-container">
      <span className="graph-title">Storage</span>

      <div className="container-doughnut">
        <Doughnut data={graphData} options={{ events: [] }} />
      </div>

      <div className="inner-white-circle">
        <span className="circle-number">85%</span>
        <span className="circle-text-under">Used</span>
      </div>
      <div className="graph-description">490.2 GB of 500GB used</div>
    </div>
  );
}
