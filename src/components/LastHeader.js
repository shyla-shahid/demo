import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
function LastHeader() {
  return (
    <div className="bg-[#e7e7e7] ">
      <ul className="flex justify-between  items-center text-black text-xs px-1 py-2">
        <li className="flex items-center font-semibold">Kindle e-Readers</li>

        <li>Free Kindle Reading Apps</li>

        <li>Kindle ebooks</li>
        <li>Kindle Unlimited</li>
        <li>Prime Reading</li>

        <li>Deals On Kindle eBooks</li>
        <li className="flex items-center">
          Categories
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li className="flex items-center">
          Best Sellers
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li className="flex items-center">
          Indian Language eBooks
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li>Kindle Exam Central</li>
        <li>Kindle eTextbooks</li>
        <li>Content and Devices</li>
      </ul>
    </div>
  );
}

export default LastHeader;
