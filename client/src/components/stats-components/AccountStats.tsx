import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import axios from "axios";
import AccountStatsType from "../../types/AccountStatsType";
import { useQuery } from "@tanstack/react-query";
import AccountStatsCategory from "./ui/AccountStatsCategory";
import { FaPeopleGroup } from "react-icons/fa6";

type AccountStatsProps = {};

const AccountStats: React.FC<AccountStatsProps> = () => {
  const user = useRecoilValue(userState);

  const fetchStats = async (): Promise<AccountStatsType> => {
    if (!user) throw new Error("User not available");
    const response = await axios.get<AccountStatsType>(`/stats/${user.epicId}`);
    console.log(response.data)
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["stats", user?.epicId],
    queryFn: fetchStats,
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stats: {(error as Error).message}</div>;

  return (
    <div className="pb-10">
      {data && (
        <>
          <section>
            <div className="flex justify-between">
              <p className="">Battle Pass Level: {data.battlePass.level}</p>
              <p className="opacity-80">{data.battlePass.progress}/100</p>
            </div>
            <div className="bg-[#404040] mt-6 w-full h-3 rounded-full overflow-hidden">
              <div className="gradient-bg w-[83%] h-full"></div>
            </div>
          </section>
          <section className="">
            <AccountStatsCategory data={data.gameModes.overall} title="Overall" icon={<FaPeopleGroup/>} />
            <AccountStatsCategory data={data.gameModes.solo} title="Solo" icon={<FaPeopleGroup/>}/>
            <AccountStatsCategory data={data.gameModes.duo} title="Duo" icon={<FaPeopleGroup/>}/>
            <AccountStatsCategory data={data.gameModes.squad} title="Squad" icon={<FaPeopleGroup/>}/>
            <AccountStatsCategory data={data.gameModes.ltm} title="LTM" icon={<FaPeopleGroup/>}/>
          </section>
        </>
      )}
    </div>
  );
};
export default AccountStats;
