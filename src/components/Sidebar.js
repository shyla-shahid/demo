import React from "react";
import { Layout, Menu } from "antd";

import { FiBookOpen } from "react-icons/fi";
import {
  PiChartPieSliceFill,
  PiShoppingBagOpen,
  PiFolderLight,
  PiIdentificationBadgeBold,
  PiUsersThree,
  PiIdentificationCard,
} from "react-icons/pi";

import logo from "../assets/logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: "#fff" }} className="max-h-screen">
      <div className="logo" style={{ padding: "16px", textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ maxWidth: "100%" }} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <div className="flex gap-8 items-center ml-6 mt-4">
          <div className="text-[#1C1C1C66] text-[0.9rem]">Favorites</div>
          <div className="text-[#1C1C1C33]  text-[0.9rem]">Recently</div>
        </div>
        <Menu.Item key="favorites-overview ">
          <div className="flex items-center space-x-2 mt-5">
            <div className="h-2 w-2 rounded-full bg-[#1C1C1C33]"></div>
            <span>Overview</span>
          </div>
        </Menu.Item>

        <Menu.Item key="favorites-overview">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-[#1C1C1C33]"></div>
            <span>Projects</span>
          </div>
        </Menu.Item>
        <Menu.Item key="favorites-overview">
          <div className="flex items-center space-x-2">
            <span className="text-[#1C1C1C66] text-base">Dashboard</span>
          </div>
        </Menu.Item>
        <div className="ml-10 -mt-3">
          {" "}
          <Menu.Item key="rewards" icon={<PiChartPieSliceFill />}>
            Rewards
          </Menu.Item>
        </div>

        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="merchandise" icon={<PiShoppingBagOpen />}>
            Merchandise
          </Menu.Item>
        </div>
        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="integrations" icon={<PiFolderLight />}>
            Integrations
          </Menu.Item>
        </div>
        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="payouts" icon={<FiBookOpen />}>
            Payouts
          </Menu.Item>
        </div>
        <Menu.Item key="favorites-overview">
          <div className="flex items-center space-x-2">
            <span className="text-[#1C1C1C66] text-base">Pages</span>
          </div>
        </Menu.Item>

        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="merchandise" icon={<PiIdentificationBadgeBold />}>
            User Profile
          </Menu.Item>
        </div>
        <div className="ml-[3.9rem] -mt-3">
          {" "}
          <Menu.Item key="rewards">Overview</Menu.Item>
        </div>
        <div className="ml-[3.9rem] -mt-3">
          {" "}
          <Menu.Item key="rewards">Sales</Menu.Item>
        </div>
        <div className="ml-[3.9rem] -mt-3">
          {" "}
          <Menu.Item key="rewards">Campaigns</Menu.Item>
        </div>
        <div className="ml-[3.9rem] -mt-3">
          {" "}
          <Menu.Item key="rewards">API</Menu.Item>
        </div>
        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="integrations" icon={<PiIdentificationCard />}>
            Account
          </Menu.Item>
        </div>
        <div className="flex items-center ml-5 -mt-3">
          <MdOutlineKeyboardArrowRight className="text-[#1C1C1C33] text-xl" />
          <Menu.Item key="payouts" icon={<PiUsersThree />}>
            Corporate
          </Menu.Item>
        </div>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
