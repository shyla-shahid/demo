import React from "react";
import book from "../assets/book.jpg";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Payment from "./Payment";
function Main() {
  return (
    <div className="flex justify-between ">
      <img src={book} className="h-[30rem]" />
      <div>
        <div className="flex flex-col w-[45rem]">
          <div className="font-semibold text-2xl">
            The Blueprint Guide To Business Ownership: The Entrepreneur
            Empowerment Book [Print Replica] Kindle Edition
          </div>
          <div class="flex items-center gap-3">
            <div>
              by <span className="text-[#007185]">Xenia Morris</span>(Author)
            </div>
            <div class="h-4 border-l border-gray-500 "></div>
            <div>Format: Kindle Edition</div>
          </div>
          <div className="w-full text-end text-[#007185] pb-2">
            See all formats and editions
          </div>
          <hr />
          <div className="py-3">
            There is no way to eliminate all the risks associated with starting
            a business; however, you can improve your chances of success with
            research, good planning, preparation, and execution. Start by
            evaluating your strengths and weaknesses as an owner and manager of
            a business. The Blueprint Guide to Business Ownership will provide
            the guidance you need to get started.
          </div>
          <hr />

          <div className="flex justify-between px-16">
            <div className="flex flex-col items-center">
              <div className="text-slate-400">Language</div>
              <PublicIcon className="mt-2" />
              <div className="font-semibold">English</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-slate-400">Publication Date</div>
              <CalendarMonthIcon className="mt-2" />
              <div className="font-semibold">8 November 2019</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-slate-400">FileSize</div>
              <InsertDriveFileIcon className="mt-2" />
              <div className="font-semibold">1016 Kb</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-slate-400">Page Flip</div>
              <InsertDriveFileIcon className="mt-2" />
              <p className="text-sm font-semibold text-[#007185]">
                Not Enabled
                <span>
                  <ArrowDropDownOutlinedIcon />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Payment />
    </div>
  );
}

export default Main;
