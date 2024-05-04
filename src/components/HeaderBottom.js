import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
function HeaderBottom() {
  return (
    <div className="bg-[#232f3e] ">
      <ul className="flex justify-between px-2 items-center gap-2 text-white text-md">
        <li className="flex items-center font-semibold">
          <MenuIcon />
          All
        </li>
        <li className="flex items-center">
          Fresh
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li>Amazon miniTv</li>

        <li>Sell</li>
        <li>Best Sellers</li>
        <li>Today's Deals</li>
        <li className="flex items-center">
          Prime
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li>Customer Service</li>
        <li>Electronics</li>
        <li>New Releases</li>
        <li>Home & Kitchen</li>
        <img src="https://m.media-amazon.com/images/G/31/Events/img24/may24ART/GW/MayART24_SWM_SN._CB561779500_.jpg" />
      </ul>
    </div>
  );
}

export default HeaderBottom;
