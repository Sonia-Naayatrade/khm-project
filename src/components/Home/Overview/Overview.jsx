import React, { useState } from "react";

const Overview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !mobile || !message) {
      setError("All fields are required.");
      return;
    }

    const formData = {
      name,
      email,
      mobile,
      message,
    };

    // Save form data to localStorage
    localStorage.setItem("enquiryFormData", JSON.stringify(formData));
    
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setError(""); // Clear error message on successful submit
  };

  return (
    <div className="w-full h-[590px] bg-[#F8F8F8]">
      <div className="w-[250px] h-[250px] relative overflow-hidden">
        <img
          src={require("../../../assets/Home/Overview/img1.png")}
          alt=""
          className="relative -left-7"
        />
        <img
          src={require("../../../assets/Home/Overview/img2.png")}
          alt=""
          className="absolute top-0 -left-2 w-[200px]"
        />
      </div>
      <div className="max-w-[1340px] h-[90px] m-auto flex  relative">
        <div className="w-[793px] h-[171px]">
          <p className="font-semibold text-[40px] w-[300px] h-[60px]">
            Welcome to{" "}
          </p>
          <span className="w-[550px] h-[110px] font-semibold text-[40px] text-[#ED193F]">
            {" "}
            Welcome to KHFM Pest Control Services
          </span>
          <p className="w-[359px] h-[68px] font-normal text-[20px] text-[#5C5C5C] mt-6">
            Your Trusted Partner for a Pest-Free Environment
          </p>
          <div>
          <svg width="235" height="63" viewBox="0 0 235 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7009 9.85045C19.7009 15.2978 15.2978 19.7009 9.85045 19.7009C4.40305 19.7009 0 15.2978 0 9.85045C0 4.40305 4.40305 0 9.85045 0C15.2978 0 19.7009 4.40305 19.7009 9.85045Z" fill="#212121"/>
<path d="M62.7717 9.85045C62.7717 15.2978 58.3686 19.7009 52.9212 19.7009C47.4738 19.7009 43.0707 15.2978 43.0707 9.85045C43.0707 4.40305 47.4738 0 52.9212 0C58.3686 0 62.7717 4.40305 62.7717 9.85045Z" fill="#FF3E68"/>
<path d="M105.814 9.85045C105.814 15.2978 101.411 19.7009 95.9637 19.7009C90.5163 19.7009 86.1132 15.2978 86.1132 9.85045C86.1132 4.40305 90.5163 0 95.9637 0C101.411 0 105.814 4.40305 105.814 9.85045Z" fill="#212121"/>
<path d="M148.887 9.85045C148.887 15.2978 144.484 19.7009 139.036 19.7009C133.589 19.7009 129.186 15.2978 129.186 9.85045C129.186 4.40305 133.589 0 139.036 0C144.484 0 148.887 4.40305 148.887 9.85045Z" fill="#FF3E68"/>
<path d="M191.929 9.85045C191.929 15.2978 187.526 19.7009 182.079 19.7009C176.632 19.7009 172.228 15.2978 172.228 9.85045C172.228 4.40305 176.632 0 182.079 0C187.526 0 191.929 4.40305 191.929 9.85045Z" fill="#212121"/>
<path d="M235 9.85045C235 15.2978 230.597 19.7009 225.149 19.7009C219.702 19.7009 215.299 15.2978 215.299 9.85045C215.299 4.40305 219.702 0 225.149 0C230.597 0 235 4.40305 235 9.85045Z" fill="#FF3E68"/>
<path d="M19.7009 52.9215C19.7009 58.3689 15.2978 62.772 9.85045 62.772C4.40305 62.772 0 58.3689 0 52.9215C0 47.4741 4.40305 43.071 9.85045 43.071C15.2978 43.071 19.7009 47.4741 19.7009 52.9215Z" fill="#212121"/>
<path d="M62.7717 52.9215C62.7717 58.3689 58.3686 62.772 52.9212 62.772C47.4738 62.772 43.0707 58.3689 43.0707 52.9215C43.0707 47.4741 47.4738 43.071 52.9212 43.071C58.3686 43.071 62.7717 47.4741 62.7717 52.9215Z" fill="#FF3E68"/>
<path d="M105.814 52.9215C105.814 58.3689 101.411 62.772 95.9637 62.772C90.5163 62.772 86.1132 58.3689 86.1132 52.9215C86.1132 47.4741 90.5163 43.071 95.9637 43.071C101.411 43.071 105.814 47.4741 105.814 52.9215Z" fill="#212121"/>
<path d="M148.887 52.9215C148.887 58.3689 144.484 62.772 139.036 62.772C133.589 62.772 129.186 58.3689 129.186 52.9215C129.186 47.4741 133.589 43.071 139.036 43.071C144.484 43.071 148.887 47.4741 148.887 52.9215Z" fill="#FF3E68"/>
<path d="M191.929 52.9215C191.929 58.3689 187.526 62.772 182.079 62.772C176.632 62.772 172.228 58.3689 172.228 52.9215C172.228 47.4741 176.632 43.071 182.079 43.071C187.526 43.071 191.929 47.4741 191.929 52.9215Z" fill="#212121"/>
<path d="M235 52.9215C235 58.3689 230.597 62.772 225.149 62.772C219.702 62.772 215.299 58.3689 215.299 52.9215C215.299 47.4741 219.702 43.071 225.149 43.071C230.597 43.071 235 47.4741 235 52.9215Z" fill="#FF3E68"/>
</svg>

          </div>
 
        </div>
        <div className="absolute top-[-230px] right-0 w-[560px] h-[557px] bg-white shadow-md rounded-lg">
          <div className="ml-5">
            <p className="w-[433px] font-normal text-[43px] ">
              SEND{" "}
              <span className="font-normal text-[43px] text-[#ED193F]">
                ENQUIRY
              </span>
            </p>
            {error && <div className="text-red-600">{error}</div>}
            <form onSubmit={handleSubmit} className="">
            <div className="">
  <label htmlFor="name" className="font-poppins text-[16px] font-semibold text-left mt-3">
    Name <span className="text-red-500"></span>
  </label>
  <input
    id="name"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className="w-[496px] h-[47px]  mt-3 rounded-tl-[10px] rounded-tr-[10px] border-2 border-gray-300 px-4 py-2 font-poppins text-[16px] font-semibold text-left text-black opacity-100 placeholder-[#F8F8F8] bg-[#F8F8F8] focus:outline-none"
    required
  />
</div>

<div className="">
  <label htmlFor="email" className="font-poppins text-[16px] font-semibold text-left mt-3">
    Email ID 
  </label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-[496px] h-[47px] mt-3  rounded-tl-[10px] rounded-tr-[10px] border-2 border-gray-300 px-4 py-2 font-poppins text-[16px] font-semibold text-left text-black opacity-100 placeholder-[#F8F8F8] bg-[#F8F8F8] focus:outline-none"
    required
  />
</div>

<div className="">
  <label htmlFor="mobile" className="font-poppins text-[16px] font-semibold text-left mt-5">
    Mobile Number 
  </label>
  <input
    id="mobile"
    type="text"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    placeholder="Enter your mobile number"
    className="w-[496px] h-[47px] mt-3 rounded-tl-[10px] rounded-tr-[10px] border-2 border-gray-300 px-4 py-2 font-poppins text-[16px] font-semibold text-left text-black opacity-100 placeholder-[#F8F8F8] bg-[#F8F8F8] focus:outline-none"
    required
  />
</div>

<div className="">
  <label htmlFor="message" className="font-poppins text-[16px] font-semibold text-left mt-3">
    Message 
  </label>
  <textarea
    id="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Enter your message"
    className="w-[496px] h-[90px]  p-3 mt-3 rounded-tl-[10px] rounded-tr-[10px] border-2 border-gray-300 font-poppins text-[16px] font-semibold text-left text-black opacity-100 placeholder-[#F8F8F8] bg-[#F8F8F8] focus:outline-none"
    required
  />
</div>


              {/* Submit Button */}
              <div className="">
                <button
                  type="submit"
                  className="w-[496px] h-[47px]  mt-4 rounded-xl bg-[#ED193F] text-white font-poppins text-[16px] font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
          src={require("../../../assets/Home/Overview/img4.png")}
          alt=""
          className="absolute bottom-10 right-1 w-[100px]"
        />
    </div>
  );
};

export default Overview;
