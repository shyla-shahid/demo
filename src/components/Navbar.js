import React, { useState } from "react";
import { FiSearch, FiBell, FiSun, FiRotateCcw } from "react-icons/fi";
import { MdOutlineViewSidebar } from "react-icons/md";
import { PiStarDuotone } from "react-icons/pi";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 py-3 px-5">
        <div className="flex items-center space-x-2">
          <MdOutlineViewSidebar className="text-[#1C1C1C66]" />
          <PiStarDuotone className="text-[#1C1C1C66]" />
          <span className="text-xs text-[#1C1C1C66]">Dashboards</span>
          <span className="text-sm text-gray-400">/</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-md">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm focus:outline-none"
            />
          </div>
          <FiSun className="text-[#1C1C1C66]" />
          <FiRotateCcw className="text-[#1C1C1C66]" />
          <FiBell
            className="text-[#1C1C1C66] cursor-pointer"
            onClick={toggleDrawer}
          />
          <MdOutlineViewSidebar className="text-[#1C1C1C66]" />
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
