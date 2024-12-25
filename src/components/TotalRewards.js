import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TotalRewards = () => {
  const data = [
    { name: "Giftcards", value: 300.56, color: "#000000" },
    { name: "Merchandise", value: 135.18, color: "#B2E6C5" },
    { name: "UPI", value: 154.02, color: "#A8C5DA" },
    { name: "Physical", value: 48.96, color: "#D6E8F4" },
  ];

  return (
    <div className="bg-[#F7F9FB] p-6 rounded-xl shadow">
      <div className="text-lg font-semibold mb-4">Total Rewards</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="90%"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <ul className="mt-4 text-sm space-y-2">
        {data.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className="block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </div>
            <span>{item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalRewards;
