import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

type DemoProps = {};

const Demo: React.FC<DemoProps> = () => {
  return (
    <div className="max-w-[900px] p-5">
      <section id="battle-pass">
        <div className="flex justify-between text-sm">
          <p className="">Battle Pass Level: 26</p>
          <p className="opacity-80">83/100</p>
        </div>
        <div className="bg-[#404040] mt-2 w-full h-2 rounded-full overflow-hidden">
          <div className="gradient-bg w-[83%] h-full"></div>
        </div>
      </section>
      <section id="account-stats" className="mt-4">
        <p className="text-dull text-sm">Account Stats:</p>
        <ul className="flex gap-3 flex-wrap mt-4 justify-center">
          <DemoStatistic name="Wins" stat="952" />
          <DemoStatistic name="Kills" stat="33,610" />
          <DemoStatistic name="K/D" stat="2.91" />
          <DemoStatistic name="Win Rate" stat="7.9%" />
          <DemoStatistic name="Minutes Played" stat="85,136"/>
          <DemoStatistic name="Matches" stat="12,514" />
          <DemoStatistic name="Players Outlived" stat="433,208" />
          <DemoStatistic name="Deaths" stat="11,562" />
          <DemoStatistic name="Top 3" stat="777" />
          <DemoStatistic name="Top 10" stat="511" />
        </ul>
      </section>
      <section id="visualized-stats" className="mt-4">
        <p className="text-dull text-sm">Visualized Stats:</p>
        <div className="flex mt-2 justify-around gap-4">
          <DoughnutChart
            title="Win Rate"
            stats={[952, 11562]}
            colors={["#FF474D", "#2a2a2a"]}
            labels={["Wins", "Losses"]}
          />
          <DoughnutChart
            title="K/D"
            stats={[33610, 11562]}
            colors={["#FF6250", "#2a2a2a"]}
            labels={["Kills", "Deaths"]}
          />
          <DoughnutChart
            title="Outlived VS Deaths"
            stats={[433208, 11562]}
            colors={["#FF474D", "#2a2a2a"]}
            labels={["Outlived", "Deaths"]}
          />
        </div>
      </section>
    </div>
  );
};
export default Demo;


type DemoStatisticProps = {
    name: string;
    stat: string;
    hide?: boolean
  };
  
  const DemoStatistic: React.FC<DemoStatisticProps> = ({ name, stat }) => {
    return (
      <li className={`bg-[#2b2b2b] py-2 px-6 rounded-sm stat-shadow `}>
        <div className="min-w-24">
          <p className="text-dull text-xs">{name}</p>
          <p className="mt-1  font-semibold">{stat}</p>
        </div>
      </li>
    );
  };




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
            font: {
                size: 12 // Change this value to adjust the font size
              },
              boxWidth: 28,
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
        this.height += 12;
      }
    }
  }];

  return (
    <div className="max-w-[210px]">
      <Doughnut data={data} options={options} plugins={plugins}/>
    </div>
  );
};
