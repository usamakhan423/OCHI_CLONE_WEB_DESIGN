import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-950 w-full py-12 px-[50px] rounded-t-[20px] -mt-[20px] shadow-lg"
    >
      <p className="w-[80vw] text-5xl font-normal font-neuemontreal text-gray-100 leading-tight pb-20">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className="underline">raise funds</span> ,{" "}
        <span className="underline">sell prod­ucts</span>,{" "}
        <span className="underline">ex­plain com­plex ideas</span>, and{" "}
        <span className="underline">hire great peo­ple</span>.
      </p>

      {/* About Details */}
      <hr className="border-t-2 border-gray-600" />
      <div
        id="about-details"
        className="w-full px-[5-px] py-12 flex font-neuemontreal"
      >
        <div className="left-side w-[50%]">
          <span className="text-gray-100">What you can expect:</span>
        </div>
        <div className="right-side w-[50%] flex justify-between">
          <div className="flex flex-col w-[50%] gap-10">
            <p className="text-gray-100">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="text-gray-100">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div id="icons-names" className="flex flex-col gap-2 ">
            <a className="underline text-gray-100 hover:text-gray-300" href="#">
              Instagram
            </a>
            <a className="underline text-gray-100 hover:text-gray-300" href="#">
              Facebook
            </a>
            <a className="underline text-gray-100 hover:text-gray-300" href="#">
              Twitter
            </a>
            <a className="underline text-gray-100 hover:text-gray-300" href="#">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600" />

      {/* End about details section */}

      {/* Approach Section */}
      <div className="approach-section font-neuemontreal py-6 flex items-start justify-between">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG9mZmljZSUyMG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D"
          alt="company-image"
          className="rounded-xl shadow-lg w-[50%]"
        />
        <div id="left-side-approach">
          <h1 className="text-5xl font-normal text-gray-200">Our approach:</h1>
          <div>
            <button className="py-4 px-8 bg-black rounded-full text-2xl text-white mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
