import React from "react";
import Statistic from "./ui/Statistic";
import DoughnutChart from "./ui/DoughnutChart";

type AccountStatsProps = {};

const AccountStats: React.FC<AccountStatsProps> = () => {
  return (
    <div>
      <section id="battle-pass">
        <div className="flex justify-between">
          <p className="">Battle Pass Level: 26</p>
          <p className="opacity-80">83/100</p>
        </div>
        <div className="bg-[#404040] mt-6 w-full h-3 rounded-full overflow-hidden">
          <div className="gradient-bg w-[83%] h-full"></div>
        </div>
      </section>
      <section id="account-stats" className="mt-8">
        <p className="text-dull">Account Stats:</p>
        <ul className="flex gap-4 flex-wrap mt-4">
          <Statistic name="Wins" stat="952" />
          <Statistic name="Kills" stat="33,610" />
          <Statistic name="K/D" stat="2.91" />
          <Statistic name="Win Rate" stat="7.9%" />
          <Statistic name="Minutes Played" stat="85,136" />
          <Statistic name="Matches" stat="12,514" />
          <Statistic name="Players Outlived" stat="433,208" />
          <Statistic name="Deaths" stat="11,562" />
          <Statistic name="Top 3" stat="777" />
          <Statistic name="Top 10" stat="511" />
        </ul>
      </section>
      <section id="visualized-stats" className="mt-8">
        <p className="text-dull">Visualized Stats:</p>
        <div className="flex mt-4 gap-20">
            <DoughnutChart title="Win Rate" stats={[952,11562]} colors={['#FF474D', '#2a2a2a']} labels={["Wins", "Losses"]}/>
            <DoughnutChart title="K/D" stats={[33610,11562]} colors={['#FF6250', '#2a2a2a']} labels={["Kills", "Deaths"]}/>
            <DoughnutChart title="Outlived VS Deaths" stats={[433208,11562]} colors={['#FF474D', '#2a2a2a']} labels={["Players Outlived", "Deaths"]}/>
        </div>
      </section>
    </div>
  );
};
export default AccountStats;




