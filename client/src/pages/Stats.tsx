import React, { useState } from "react";
import { FaUser, FaUserEdit, FaHome } from "react-icons/fa";
import AccountStats from "../components/stats-components/AccountStats";
import Upload from "../components/stats-components/Upload";
import Games from "../components/stats-components/Games";
import { Link } from "react-router-dom";
import useLogoutUser from "../hooks/useLogoutUser";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  const [activeTab, setActiveTab] = useState<
    "account-stats" | "upload" | "games"
  >("account-stats");


  const logout = useLogoutUser()

  return (
    <>
      <nav className="pt-12 mx-auto max-w-[1232px] px-4 flex justify-between pb-6">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white text-xl">
            <FaUser />
          </div>
          <div className="">
            <p className="font-medium">Cole.Morgan</p>
            <p className="opacity-70 font-[350] text-sm">
              colemmorgann@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to={"/"}>
            <span className="text-2xl ">
              <FaHome />
            </span>
          </Link>
          <span className="text-2xl ">
            <FaUserEdit />
          </span>
          <button className="border border-white border-opacity-60 px-8 h-10 rounded-full text-sm" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="h-[2px] w-full bg-[#808080c5] max-w-[1200px] mx-auto rounded-full" />
      <div className="max-w-[1232px] px-4 mx-auto pb-40">
        <div className="flex text-xs mb-10">
          <button
            className="px-12 py-4 border-x border-[#80808044] bg-[#3c3c3c]"
            onClick={() => setActiveTab("account-stats")}
          >
            Account Stats
          </button>
          <button
            className="px-12 py-4 border-r border-[#80808044] bg-[#2b2b2b]"
            onClick={() => setActiveTab("games")}
          >
            View Uploads
          </button>
          <button
            className="px-12 py-4 border-r border-[#80808044] bg-[#2b2b2b]"
            onClick={() => setActiveTab("upload")}
          >
            Upload Games
          </button>
        </div>
        {activeTab === "account-stats" && <AccountStats />}
        {activeTab === "games" && <Games />}
        {activeTab === "upload" && <Upload />}
      </div>
    </>
  );
};
export default Stats;
