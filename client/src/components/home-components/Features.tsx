import React from "react";
import { IoIosStats } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

type FeaturesProps = {};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="bg-black relative z-20 h-screen -mt-24 px-8 pt-40">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h3 className="text-4xl font-semibold ">Features</h3>
        <p className="mt-4 text-lg opacity-85 ">
          A few good reasons you should use RePlayed to analyze your games.
        </p>
        <ul className="mt-12 flex justify-center gap-8">
          <li className="border border-pink border-opacity-35 p-8 rounded-xl flex flex-col items-center justify-center max-w-[370px]">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><IoIosStats/></span></div>
            <p className="mt-6 text-xl font-semibold">Advanced Analytics</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Gain unique match insights such as bot %, match player list, match killfeed, top players, stat breakdowns and more.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
          </li>
          <li className="border border-pink border-opacity-35 p-8 rounded-xl flex flex-col items-center justify-center max-w-[370px]">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><BsGraphUp/></span></div>
            <p className="mt-6 text-xl font-semibold">Advanced Analytics</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Gain unique match insights such as bot %, match player list, match killfeed, top players, stat breakdowns and more.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
          </li>
          <li className="border border-pink border-opacity-35 p-8 rounded-xl flex flex-col items-center justify-center max-w-[370px]">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><MdOutlineAttachMoney/></span></div>
            <p className="mt-6 text-xl font-semibold">Advanced Analytics</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Gain unique match insights such as bot %, match player list, match killfeed, top players, stat breakdowns and more.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Features;
