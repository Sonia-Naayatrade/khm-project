import React from "react";

const HomeService = () => {
  return (
    <>
      <div className="max-w-[1440px] h-[180px] m-auto">
        <div className="h-[180px]">
          <p className="text-[46px] font-normal mt-4">
            WHY CHOOSE
            <span className="text-[46px] font-normal text-[#ED193F] mt-4">
              {" "}
              KHFM PEST CONTROL?
            </span>{" "}
          </p>
          <p className="w-[1238px] h-[127px] font-normal text-[18px] mt-4">
            At KHFM Pest Control, we combine advanced technology with
            eco-friendly solutions to protect your home, office, or industrial
            space from unwanted pests. With years of expertise, a dedicated
            team, and a customer-centric approach, we ensure complete peace of
            mind and a pest-free environment for you.
          </p>
        </div>
      </div>
      {/* section */}
      <div className="w-full h-[680px] bg-[#F8F8F8]">
        <div className="max-w-[1440px] h-[80px] m-auto pt-5 flex gap-6">
          {/* left side */}
          <div className="w-[990px]">
            <p className="text-[47px] font-normal">
              {" "}
              COMPREHENSIVE{" "}
              <span className="text-[47px] font-normal text-[#ED193F]">
                PEST CONTROL SOLUTIONS
              </span>
            </p>
            <div className="mt-3">
              <p className=" w-[263px] h-[51px] font-bold text-[20px]">1. Residential Pest Control</p>
              <p className="w-[787px] h-[68px] font-normal text-[18px]">
                Protect your home and loved ones from common pests like
                cockroaches, ants, bed bugs, and termites with our tailored
                solutions.Safe for kids and pets.
              </p>
              <p className=" w-[263px] h-[51px] font-bold text-[20px]">2. Commercial Pest Control</p>
              <p className="w-[787px] h-[68px] font-normal text-[18px]" >
                Maintain a clean and pest-free workplace. We offer services for
                offices, restaurants, retail spaces, and more. Compliant with
                industry standards.
              </p>
              <p className="h-[51px] font-bold text-[20px]" >3. Industrial Pest Management</p>
              <p className="w-[787px] h-[68px] font-normal text-[18px]">Safeguard your manufacturing units, warehouses, and factories from pest infestations that could harm your operations.</p>
              <p className=" w-[463px] h-[51px] font-bold text-[20px]">4. Specialized Treatments</p>
              <p className="w-[863px] h-[68px] font-normal text-[18px]">Termite Control: Comprehensive pre- and post-construction solutions.
Rodent Control: Advanced measures to prevent and eliminate rodent issues.
Mosquito Management: Effective outdoor and indoor treatments.
Disinfection Services: Create a hygienic environment with our sanitization solutions.</p>
            </div>
          </div>
          {/* right side */}
          <div>
            <img
              src={require("../../../assets/Home/Overview/Solutions.png")}
              alt=""
              className=""
            />
             <div className="grid grid-cols-2 gap-2">
  <img
    src={require("../../../assets/Home/Overview/img5.png")}
    alt=""
    className="w-[150px] mt-5"
  />
  <img
    src={require("../../../assets/Home/Overview/img7.png")}
    alt=""
    className="w-[150px] mt-5 "
  />
  <img
    src={require("../../../assets/Home/Overview/img8.png")}
    alt=""
    className="w-[150px] mt-5"
  />
  <img
    src={require("../../../assets/Home/Overview/img6.png")}
    alt=""
    className="w-[150px] mt-5"
  />
</div>

          </div>
        </div>
      </div>
      {/* our process */}
      <div className="max-w-[1440px] h-[350px] m-auto">
     <p className="font-normal text-[48px]"> OUR <span className="font-normal text-[48px] text-[#ED193F]"> PROCESS </span></p>
     <div className="w-[306px] h-[282px] ">

     </div>
      </div>
    </>
  );
};

export default HomeService;
