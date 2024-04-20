// import React from "react";

import { useState } from "react";
import { useEffect } from "react";

const Playful = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-red-500">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 h-auto flex items-center gap-20">
          <div className="flex items-center justify-center w-[15vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line       w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playful;
