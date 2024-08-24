import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type DoughnutChartProps = {
    title: string,
    labels: string[],
    colors: string[]
    stats: number[]
}


const DoughnutChart: React.FC<DoughnutChartProps> = ({title,labels,colors,stats}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: stats,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        borderColor: '#606060',
        borderWidth: 1
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
            color: '#f5f5f5',
          },
      },
    },
  };

  const plugins = [{
    id: 'increaseLegendSpacing',
    beforeInit: (chart:any) => {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 16;
      }
    }
  }];

  return (
    <div className="max-w-[264px]">
      <Doughnut data={data} options={options} plugins={plugins}/>
    </div>
  );
};

export default DoughnutChart;
