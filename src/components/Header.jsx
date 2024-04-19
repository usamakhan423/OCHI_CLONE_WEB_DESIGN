import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="Header px-10 py-4 pt-52 shadow-md bg-gray-950">
      <h1 className="text-8xl font-bold font-oswald text-white drop-shadow-lg">
        WE CREATE
      </h1>
      <div className="flex items-center">
        <div className="image w-[150px] mr-2 h-[80px] mt-2 bg-orange-600 rounded-md py-6"></div>
        <h1 className="text-8xl font-bold font-oswald text-teal-500 drop-shadow-lg">
          EYE-OPENING
        </h1>
      </div>
      <h1 className="text-8xl font-bold font-oswald text-white drop-shadow-lg">
        PRESENTATIONS
      </h1>

      <div
        id="header-footer"
        className="flex items-center justify-between mt-12 border-t-2 border-gray-200 py-4"
      >
        <span className="font-normal text-lg text-gray-200">
          For public and private companies
        </span>
        <span className="font-normal text-gray-200 text-lg">
          From the first pitch to IPO
        </span>
        <div className="flex items-center gap-2">
          <button className="py-2 px-6 text-gray-200 border-2 border-gray-200 rounded-full">
            START THE PROJECT
          </button>
          <button className="py-1 px-2 border-2 text-2xl text-white border-gray-200 rounded-full">
            <MdArrowOutward />
          </button>
        </div>
      </div>

      <div id="scroll-btn" className="text-center mt-6">
        <button className="font-semibold text-xl text-gray-400">
          Scroll Down <i class="ri-arrow-down-wide-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
