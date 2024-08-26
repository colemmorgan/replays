import React, { ReactNode, useState } from "react";
import Statistic from "./Statistic";
import DoughnutChart from "./DoughnutChart";
import GameMode from "../../../types/GameMode";
import { FaChevronDown } from "react-icons/fa";

type AccountStatsCategoryProps = {
  data: GameMode;
  title: string;
  icon: ReactNode;
};

const AccountStatsCategory: React.FC<AccountStatsCategoryProps> = ({
  data,
  title,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`border-b border-[#80808080] mt-12 ${
        isOpen ? "pb-8" : "pb-4"
      }`}
    >
      <div className="flex justify-between items-end">
        <p className="flex items-center gap-2.5 text-lg font-medium">
          {title} <span className="text-lg text-red">{icon}</span>
        </p>
        <p
          className="text-sm text-dull cursor-pointer flex gap-2 items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{isOpen ? "Collapse" : "Expand"}</span>
          <span className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}>
            <FaChevronDown />
          </span>
        </p>
      </div>
      {data && isOpen && (
        <>
          <section className="">
            <ul className="flex gap-4 flex-wrap mt-6">
              <Statistic name="Wins" stat={data.wins.toLocaleString()} />
              <Statistic name="Kills" stat={data.kills.toLocaleString()} />
              <Statistic name="K/D" stat={data.kd.toLocaleString()} />
              <Statistic name="Win Rate" stat={`${data.winRate}%`} />
              <Statistic
                name="Minutes Played"
                stat={data.minutesPlayed.toLocaleString()}
              />
              <Statistic name="Matches" stat={data.matches.toLocaleString()} />
              <Statistic
                name="Players Outlived"
                stat={data.playersOutlived.toLocaleString()}
              />
              <Statistic name="Deaths" stat={data.deaths.toLocaleString()} />
              <Statistic
                name="Kills Per Match"
                stat={data.kpm.toLocaleString()}
              />
            </ul>
          </section>
          <section className="mt-8">
            <p className="text-dull text-sm">Visualized Stats:</p>
            <div className="flex mt-4 gap-20">
              <DoughnutChart
                title="Win Rate"
                stats={[data.wins, data.matches - data.wins]}
                colors={["#FF474D", "#2a2a2a"]}
                labels={["Wins", "Losses"]}
              />
              <DoughnutChart
                title="K/D"
                stats={[data.kills, data.deaths]}
                colors={["#FF6250", "#2a2a2a"]}
                labels={["Kills", "Deaths"]}
              />
              <DoughnutChart
                title="Outlived VS Deaths"
                stats={[data.playersOutlived, data.deaths]}
                colors={["#FF474D", "#2a2a2a"]}
                labels={["Outlived", "Deaths"]}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default AccountStatsCategory;
