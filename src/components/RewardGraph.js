import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", currentWeek: 12, previousWeek: 8 },
  { name: "Feb", currentWeek: 10, previousWeek: 12 },
  { name: "Mar", currentWeek: 8, previousWeek: 15 },
  { name: "Apr", currentWeek: 15, previousWeek: 10 },
  { name: "May", currentWeek: 20, previousWeek: 12 },
  { name: "Jun", currentWeek: 25, previousWeek: 28 },
];

const RewardGraph = () => {
  return (
    <div className="bg-[#F7F9FB] p-6 rounded-xl shadow">
      <div className="flex gap-8 mb-4">
        <div className="text-lg font-semibold">Rewards</div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <span>
            Current Week <span className="font-semibold">$58,211</span>{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-[#A8C5DA]"></div>
          <span>
            Previous Week <span className="font-semibold">$68,768</span>{" "}
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            ticks={[0, 10, 20, 30]}
            tickFormatter={(value) => `${value}M`}
            axisLine={false}
            tickLine={false}
            tickMargin={18}
          />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="#000000"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />

          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#A8C5DA"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RewardGraph;
