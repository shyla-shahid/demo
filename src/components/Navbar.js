import React, { useState } from "react";
import logoo from "../assets/logoo.png";
import { CiLocationOn } from "react-icons/ci";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import HeaderBottom from "./HeaderBottom";
import LastHeader from "./LastHeader";

function Navbar() {
  const [showAll, setShowAll] = useState(false);
  const allItems = [
    { _id: 102, title: "Automotive" },
    { _id: 103, title: "Baby" },
    { _id: 104, title: "Beauty & Personal Care" },
    { _id: 102, title: "Automotive" },
    { _id: 103, title: "Baby" },
    { _id: 104, title: "Beauty & Personal Care" },
    { _id: 102, title: "Automotive" },
    { _id: 103, title: "Baby" },
    { _id: 104, title: "Beauty & Personal Care" },
    { _id: 102, title: "Automotive" },
    { _id: 103, title: "Baby" },
    { _id: 104, title: "Beauty & Personal Care" },
  ];
  return (
    <div className="flex flex-col ">
      <div className="bg-[#0F1111] h-20 flex justify-between items-center gap-5 px-2">
        <img alt="logo" src={logoo} className="h-28" />
        <div className="flex items-center justify-center gap-1">
          <CiLocationOn className="text-2xl text-white" />
          <div className="flex flex-col gap-0">
            <div className="text-[#ccc]">Delivering To Delhi 11011</div>
            <div className="font-bold text-md text-white">Update Location</div>
          </div>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-28 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent cursor-pointer "
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base  flex-grow outline-none border-none px-2"
            type="text"
            placeholder="entrepreneur blueprint by morris"
          />
          <span className="w-12 h-full flex items-center justify-center bg-[#f3a847] cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex flex-col gap-1 items-start justify-center ">
          <p className="text-xs text-white font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-white t">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-1 ">
          <p className="text-xs text-white  font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white ">& Orders</p>
        </div>

        <div className="flex items-start justify-center  relative">
          <ShoppingCartIcon className="text-white " />
          <p className="text-xs font-semibold mt-3 text-white ">
            Cart
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
      <LastHeader />
    </div>
  );
}

export default Navbar;
