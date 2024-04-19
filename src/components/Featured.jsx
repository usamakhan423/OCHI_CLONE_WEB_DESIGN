import React from "react";

const Featured = () => {
  return (
    <div className="w-full h-full py-12 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-200">
        <h1 className="text-8xl font-oswald tracking-tight text-zinc-200 pb-5">
          Featured Project
        </h1>
      </div>
      <div className="flex items-center justify-between gap-10 cards w-full mt-10 px-10">
        <div className="card-container w-1/2 h-[60vh]">
          <div className="w-full h-full rounded-lg scale-70 overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
          <div className=" p-4">
            <ul className="flex -items-center justify-start gap-5">
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                BRAND IDENTITY
              </li>
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                DESIGN RESEARCH
              </li>
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                INVESTOR DECK
              </li>
            </ul>
          </div>
        </div>
        <h1 className="bg-red-500 text-5xl text-zinc-100 font-bold p-4 rounded-lg">
          FYDE
        </h1>
        <div className="card-container w-1/2 h-[60vh] bg-zinc-500 rounded-lg">
          <div className="w-full h-full rounded-lg scale-70 overflow-hidden">
            <img
              className="w-full h-full bg-cover scale-90"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
          <div className=" p-4">
            <ul className="flex -items-center justify-start gap-5">
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                BRAND IDENTITY
              </li>
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                DESIGN RESEARCH
              </li>
              <li className="py-1 px-3 border border-zinc-100 rounded-full text-sm text-zinc-200">
                INVESTOR DECK
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
