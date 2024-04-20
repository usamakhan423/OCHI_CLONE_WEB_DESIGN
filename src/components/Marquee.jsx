import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed=".8"
        className="marquee-section w-full h-[60vh] bg-[#004D43] -mt-[6px] text-center py-6"
      >
        <div className="border-t-2 border-b-2 overflow-hidden">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className="text-[230px] w-full font-bold text-white drop-shadow-lg tracking-tight font-oswald"
          >
            WE ARE OCHI
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
