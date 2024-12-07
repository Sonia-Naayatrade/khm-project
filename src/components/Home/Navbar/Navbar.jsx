import React from "react";
import AboutUsPage from "../../../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../../../pages/ContactUsPage/ContactUsPage";
import ServicesPage from "../../../pages/ServicesPage/ServicesPage";

const storeTabsHeader = [
  "HOME",
  "ABOUT US",
  "OUR SERVICES",
  "CAREERS",
  "PORTFOLIO",
  "CONTACT US",
];



const Navbar = () => {
  return (
    <div className="max-w-[1440px] h-[90px] m-auto">
      <div className="flex flex-row items-center justify-between w-[1240px] h-[97px]">
        <img
          src={require("../../../assets/Home/Navbar/logo.png")}
          alt=""
          className=""
        />
        <nav>
        <ul 
  className="list-disc flex text-black text-[14px] w-[705px] h-[21px] items-center justify-between font-poppins font-semibold leading-[21px] text-left"
>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      Home
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      About
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      Process
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      Services
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      Review
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
      FAQ
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
  <li className="relative hover:text-red-500 active:text-red-500 group">
    <button className="peer relative z-10">
    Contact Us
    </button>
    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
  </li>
</ul>

        </nav>

      </div>
     
    </div>
  );
};

export default Navbar;
