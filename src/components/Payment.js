import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
function Payment() {
  return (
    <div className="flex flex-col w-[20rem] ">
      <div className=" border-gray-200 border-4   p-2">
        <div className=" border-[#007185] border-4 rounded-xl p-2 mb-3">
          <div className="flex flex-col">
            <div className=" font-semibold">Kindle Edition</div>
            <div className=" font-semibold">Rs 499</div>
            <div>Available Instanty</div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <div>
            Kindle Price: <span className="text-red-500">Rs:499</span>
          </div>
          <div className="flex">
            <div className="w-32">Sold by: </div>

            <div>Amazon Asia-Pacific Holdings Private Limited</div>
          </div>
          <button className="bg-yellow-400 py-1 rounded-2xl mt-2">
            {" "}
            Add to eBook cart
          </button>
          <button className="bg-orange-500 py-1 rounded-2xl mt-2">
            {" "}
            Buy now
          </button>
          <div className="flex w-full justify-center items-center text-[#007185]">
            <div>Deliver to your Kindle Library</div>
            <ArrowDropDownOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-gray-200 border-4 mt-3 p-1">
        <div className="font-semibold">Buy For Others</div>
        <div className="font-semibold">
          Give as a gift or purchase for a team or group.
        </div>
      </div>
    </div>
  );
}

export default Payment;
