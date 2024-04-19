import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-between bg-zinc-900">
      <div className="w-1/2 h-1/2 flex flex-col items-start justify-between">
        <div>
          <h1 className="text-8xl font-bold -leading-20 tracking-tighter py-4 pl-10 oswald text-zinc-100">
            EYE-
          </h1>
          <h1 className="text-8xl font-bold -mt-12 tracking-tighter py-4 pl-10 oswald text-zinc-100">
            OPENING
          </h1>
        </div>
        <div className="flex items-center justify-start">
          <h2 className="text-2xl font-bold pl-10 text-gray-400">OCHI</h2>
          <div className="w-2 h-2 rounded-full ml-2 bg-red-500"></div>
        </div>
      </div>
      <div className="w-1/2 h-1/2">
        <h1 className="text-7xl font-bold leading-20 tracking-tighter py-4 px-5 oswald text-zinc-100">
          PRESENTATIONS
        </h1>
        <ul className="flex item-start justify-start gap-3 ml-6">
          <li className="text-blue-500 underline">
            <a href="#">Instagram</a>
          </li>
          <li className="text-blue-500 underline">
            <a href="#">Facebook</a>
          </li>
          <li className="text-blue-500 underline">
            <a href="#">Youtube</a>
          </li>
          <li className="text-blue-500 underline">
            <a href="#">LinkedIn</a>
          </li>
        </ul>
        <div className="py-10 px-5 w-4/5">
          <p className="text-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum est
            dolore non deserunt rem eos tempora quia ea, nostrum incidunt.ipsum,
            dolor sit amet consectetur adipisicing elit. Ipsum est dolore non
            deserunt rem eos tempora quia ea, nostrum incidunt.
          </p>
        </div>
        <div>
          <ul className="flex item-start justify-start gap-10 ml-6 ">
            <li className=" underline cursor-pointer text-gray-600 hover:text-gray-500 transition-all">
              HOME
            </li>
            <li className=" underline cursor-pointer text-gray-600 hover:text-gray-500">
              ABOUT
            </li>
            <li className=" underline cursor-pointer text-gray-600 hover:text-gray-500">
              BLOGS
            </li>
            <li className=" underline cursor-pointer text-gray-600 hover:text-gray-500">
              PORTFOLIO
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
