import React from "react";
import { FaUser, FaUserEdit } from "react-icons/fa";
import AccountStats from "../components/stats-components/AccountStats";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <>
      <nav className="pt-12 mx-auto max-w-[1232px] px-4 flex justify-between pb-6">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white text-xl">
            <FaUser />
          </div>
          <div className="">
            <p className="font-medium">Cole.Morgan</p>
            <p className="opacity-70 font-[350] text-sm">colemmorgann@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="text-2xl ">
            <FaUserEdit />
          </span>
          <button className="border border-white border-opacity-60 px-8 h-10 rounded-full text-sm">
            Logout
          </button>
        </div>
      </nav>
      <div className="h-[2px] w-full bg-[#808080c5] max-w-[1200px] mx-auto rounded-full"/>
      <div className="max-w-[1232px] px-4 mx-auto pb-40">
        <div className="flex text-xs mb-10">
            <button className="px-12 py-4 border-x border-[#80808044] bg-[#3c3c3c]">Account Stats</button>
            <button className="px-12 py-4 border-r border-[#80808044] bg-[#2b2b2b]">Upload Stats</button>
            <button className="px-12 py-4 border-r border-[#80808044] bg-[#2b2b2b]">View Uploads</button>
            <button className="px-12 py-4 border-r border-[#80808044] bg-[#2b2b2b]">Upload Games</button>
        </div>
        <AccountStats/>
      </div>
    </>
  );
};
export default Stats;
