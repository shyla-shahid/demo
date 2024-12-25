import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import RewardGraph from "./RewardGraph";
import History from "./History";
import RewardsByLocation from "./RewardsByLocation";
import TotalRewards from "./TotalRewards";
import RewardCards from "./RewardCards";

const data = [
  { name: "Jan", rewards: 10 },
  { name: "Feb", rewards: 20 },
  { name: "Mar", rewards: 25 },
  { name: "Apr", rewards: 30 },
  { name: "May", rewards: 28 },
  { name: "Jun", rewards: 26 },
];

const Reward = () => {
  return (
    <div className="p-4 max-w-screen">
      <div className="font-semibold mb-4">Reward X</div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 flex flex-col gap-6 max-w-[75%]">
          <div className="flex flex-wrap gap-4">
            <RewardCards />
            <div className="bg-[#F7F9FB] p-6 rounded-lg shadow flex-1 max-w-[700px]">
              <div className="text-md font-semibold mb-4">
                Month Wise Rewards
              </div>
              <ResponsiveContainer width="100%" height={230}>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    ticks={[0, 10, 20, 30]}
                    tickFormatter={(value) => `${value}M`}
                  />
                  <Bar dataKey="rewards" fill="#A8C5DA" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <RewardGraph />
            <History />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 max-w-[25%]">
          <TotalRewards />
          <RewardsByLocation />
        </div>
      </div>
    </div>
  );
};

export default Reward;
