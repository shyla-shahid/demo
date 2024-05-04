import React from "react";
import ad from "../assets/ad.jpg";
function Adv() {
  return (
    <div className="flex justify-between px-14 py-2 items-center">
      <div className="bg-blue-900 px-1 text-white h-6">Atlantics</div>
      <div> Woman Empowerment In Digital World</div>
      <div className="text-lg flex gap-3 items-center">
        <span className="text-red-600 text-lg"> -16% </span>
        Rs.1245
        <img src={ad} className="h-10" />
      </div>
    </div>
  );
}

export default Adv;
