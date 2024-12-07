import React from "react";
import Hero from "./Hero/Hero";
import Overview from "./Overview/Overview";
import Service from "./Service/HomeService";
 import Inquiry from "./Inquiry/Inquiry";
 import Features from "./Features/Features";
  import About from "./About/HomeAbout";
 import Challenges from "./Challenges/Challenges";
// import QuotationForm from "./QuotationForm/QuotationForm";
 import Testimonial from "./Testimonial/Testimonial";
  import Footer from "./Footer/Footer";
import ContactUs from "./Contact/ContactUs";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
       <Service />
       <Inquiry />
       <Features />
       <About />
       <Challenges />
      {/* <QuotationForm />  */}
      <Testimonial />
      <FAQ/>
      <ContactUs/>
     <Footer />       
    </div>
  );
};

export default Home;
