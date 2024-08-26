import React from "react";
import { IoIosStats } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

type FeaturesProps = {};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="bg-black relative z-20 -mt-24 px-8 pt-44 pb-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h3 className="text-4xl font-semibold ">Features</h3>
        <p className="mt-4 text-lg opacity-85 ">
          A few good reasons you should use RePlayed to analyze your games.
        </p>
        <ul className="mt-12 flex justify-center gap-8">
          <li className="gradient-bg p-[1px] rounded-xl">
            <div className="p-8 flex flex-col items-center justify-center max-w-[370px] bg-black rounded-xl">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><IoIosStats/></span></div>
            <p className="mt-6 text-xl font-semibold">Advanced Analytics</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Gain unique match insights such as bot %, match player list, match killfeed, top players, stat breakdowns and more.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
            </div>
          </li>
          <li className="gradient-bg p-[1px] rounded-xl">
            <div className="p-8 flex flex-col items-center justify-center max-w-[370px] bg-black rounded-xl">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><BsGraphUp/></span></div>
            <p className="mt-6 text-xl font-semibold">Save Your Games</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Access your uploaded games anytime from anywhere with a Replayed account. Your games are safely stored in the cloud.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
            </div>
          </li>
          <li className="gradient-bg p-[1px] rounded-xl">
            <div className="p-8 flex flex-col items-center justify-center max-w-[370px] bg-black rounded-xl">
            <div className="bg-darkRed p-4 rounded-xl"><span className="text-altRed text-3xl"><MdOutlineAttachMoney/></span></div>
            <p className="mt-6 text-xl font-semibold">Always Free</p>
            <p className="mt-4 text-sm font-[350] leading-relaxed text-center">Analyze your stats without interuptions from ads and never worry about having to pay a fee for Replayed.</p>
            <p className="mt-3 font-semibold flex items-center gap-2">Learn More <span><FaLongArrowAltRight/></span></p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};
export default Features;
