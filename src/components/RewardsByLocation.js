import React from "react";
import map from "../assets/Map.png";

const RewardsByLocation = () => {
  const locations = [
    { name: "NCR", value: 72, color: "#000000" },
    { name: "Mumbai", value: 39, color: "#B2E6C5" },
    { name: "Kolkata", value: 25, color: "#A8C5DA" },
    { name: "Bangalore", value: 61, color: "#D6E8F4" },
  ];

  return (
    <div className="bg-[#F7F9FB] p-6 rounded-xl shadow ">
      <div className="text-lg font-semibold mb-4">Rewards by Location</div>
      <div className="flex items-center justify-center">
        <img src={map} alt="map" />
      </div>

      <ul className="text-sm space-y-2 mt-3">
        {locations.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className="block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{item.value}K</span>
              <div className="w-32 h-1 bg-gray-200 rounded-full">
                <div
                  className="h-1 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    width: `${(item.value / 72) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsByLocation;
