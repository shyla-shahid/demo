import React from "react";
import { Timeline } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBroadcast } from "react-icons/bs";

const Drawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const items = [
    {
      children: (
        <div className="flex flex-col ">
          <span>Sent Reward to Jaslok</span>
          <span className="text-gray-400 text-xs">Just now</span>
        </div>
      ),
      dot: (
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User"
          className="w-6 h-6 rounded-full"
        />
      ),
    },
    {
      children: (
        <div className="flex flex-col ">
          <span>Sent Reward to Marina</span>
          <span className="text-gray-400 text-xs">59 minutes ago</span>
        </div>
      ),
      dot: (
        <img
          src="https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Network"
          className="w-6 h-6 rounded-full"
        />
      ),
    },
    {
      children: (
        <div className="flex flex-col ">
          <span>Sent Reward to Ankit</span>
          <span className="text-gray-400 text-xs">12 hours ago</span>
        </div>
      ),
      dot: (
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Testing"
          className="w-6 h-6 rounded-full"
        />
      ),
    },
    {
      children: (
        <div className="flex flex-col ">
          <span>Sent Reward to Kanika</span>
          <span className="text-gray-400 text-xs">Today, 11:59 AM</span>
        </div>
      ),
      dot: (
        <img
          src="https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Solved"
          className="w-6 h-6 rounded-full"
        />
      ),
    },
    {
      children: (
        <div className="flex flex-col ">
          <span>Sent Reward to Nidhi</span>
          <span className="text-gray-400 text-xs">Feb 2, 2024</span>
        </div>
      ),
      dot: (
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Reward"
          className="w-6 h-6 rounded-full"
        />
      ),
    },
  ];
  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50">
      <div className="flex justify-end p-3">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black focus:outline-none"
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <h3 className="text-base mb-4">Notifications</h3>
          <ul className="space-y-2 ">
            <li className="flex items-start gap-2">
              <div className="bg-[#E3F5FF] p-1 rounded-md flex items-center justify-center">
                <PiBugBeetle />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.8px] font-medium">
                  Typeform Integration Connected
                </span>
                <span className="text-gray-400 text-xs">Just now</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <div className="bg-[#E5ECF6] p-1 rounded-md flex items-center justify-center">
                <AiOutlineUser />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.8px] font-medium">
                  New user registered.
                </span>
                <span className="text-gray-400 text-xs">59 minutes ago</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[#E3F5FF] p-1 rounded-md flex items-center justify-center">
                <PiBugBeetle />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.8px] font-medium">
                  Automation Created for SAP{" "}
                </span>
                <span className="text-gray-400 text-xs">12 hours ago</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[#E5ECF6] p-1 rounded-md flex items-center justify-center">
                <BsBroadcast />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.8px] font-medium">
                  Balance Added to Wallet{" "}
                </span>
                <span className="text-gray-400 text-xs">Today, 11:59 AM</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-base">Activities</div>
          <Timeline
            items={items.map((item) => ({
              ...item,
              dot: (
                <div className="w-6 h-6 flex items-center justify-center">
                  {item.dot}
                </div>
              ),
            }))}
          />
        </div>

        <div>
          <h3 className="text-base -mt-6">Contacts</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact"
                className="w-6 h-6 rounded-full"
              />
              <span>Natali Craig</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact"
                className="w-6 h-6 rounded-full"
              />
              <span>Drew Cano</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact"
                className="w-6 h-6 rounded-full"
              />
              <span>Andi Lane</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact"
                className="w-6 h-6 rounded-full"
              />
              <span>Koray Okumus</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
