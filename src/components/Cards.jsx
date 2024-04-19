import React from "react";

const Cards = () => {
  return (
    <div className="w-full -h-screen bg-zinc-100 flex items-center p-4 gap-5 py-20">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <h1 className="text-8xl font-bold drop-shadow-xl leading-none tracking-tighter text-[#CDEA68]">
            OCHI
          </h1>
          <div className="absolute bottom-5 left-5 border border-yellow-500 py-1 px-4 rounded-full">
            <span className="text-lg font-lighter text-yellow-500">
              @2021-2024
            </span>
          </div>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex items-center gap-5">
        <div className="card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <h1 className="text-3xl font-bold drop-shadow-md leading-none text-white">
            CLUTCH
          </h1>
          <div className="absolute bottom-5 left-5 border border-yellow-500 py-1 px-4 rounded-full">
            <span className="text-sm font-lighter text-yellow-500">
              RATING 5.0 ON CLUTCH
            </span>
          </div>
        </div>
        <div className="card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <h1 className="text-3xl font-bold drop-shadow-md leading-none text-white ">
            Get Hired!
          </h1>
          <div className="absolute bottom-5 left-5 border border-yellow-500 py-1 px-4 rounded-full">
            <span className="text-sm font-lighter text-yellow-500">
              BUSINESS BOOTCAMP ALUMNI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
