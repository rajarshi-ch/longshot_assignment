import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

function getData(difficulty: number) {
  return {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [difficulty, 100 - difficulty],
        backgroundColor: ["#FFCE56", "#cac9c9"],
      },
    ],
  };
}

let size = "14px";

export default function DonutChart({ difficulty }: { difficulty: number }) {
  let data = getData(difficulty);
  return <Doughnut data={data} width={size} height={size} />;
}
