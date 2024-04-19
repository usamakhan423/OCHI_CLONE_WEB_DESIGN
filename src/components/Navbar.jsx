const Navbar = () => {
  return (
    <div className="fixed z-[999] flex items-center justify-between w-full h-20px py-6 px-10 bg-gray-900">
      <div className="flex items-center justify-start">
        <h2 className="text-2xl font-bold pl-10 text-gray-400">OCHI</h2>
        <div className="w-2 h-2 rounded-full ml-2 bg-red-500"></div>
      </div>

      <div id="links" className="flex items-center gap-10 font-neuemontreal">
        {["Services", "Our Work", "About  Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <a
              className={`font-normal text-md text-gray-500 hover:text-gray-300 ${
                index === 4 && "ml-32"
              }`}
              key={index}
              href="#"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
