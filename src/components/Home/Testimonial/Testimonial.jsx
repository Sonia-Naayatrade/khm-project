import React, { useRef, useState } from 'react'
import handwquotes from '../../../assets/Home/Testimonial/handwquotes.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import fiveStars from '../../../assets/Home/Testimonial/5stars.svg'
import testimonialsOutlined from '../../../assets/Home/Testimonial/testimonialsOutlined.svg'

const testimonials = [
  {
    name: "Navi Mumbai Municipal Corporation",
    location: "Navi Mumbai",
    feedback:
      "Over the last 16 years, the Municipal Corporation of Navi Mumbai has entrusted KHFM with the crucial task of malaria control in the area. Declared as a malaria prone zone by the World Health Organization (WHO), this region was accustomed to seeing numerous cases of malaria each year.",
  },
  {
    name: "JNPT",
    location: "Navi Mumbai",
    feedback:
      "Considered to be one of the world’s most modern ports, the Jawaharlal Nehru Port is the only one in the country that has crossed the figure of 1.5 million TEUs (twenty foot equitable units) in cargo handling. However, this impressive bulk of cargo comes with a serious set of problems: that of contamination from pests.",
  },
  // {
  //   name: "Rohit Sharma",
  //   location: "Mumbai",
  //   feedback:
  //     "KHFM Pest Control made our office pest-free in no time. Their team was professional and efficient!",
  // },
  // {
  //   name: "Priya Mehta",
  //   location: "Pune",
  //   feedback:
  //     "Highly recommend their termite control service. Excellent results and no hassles.",
  // },
];

const Testimonial = () => {
  return (
    <div className='w-[1340px] min-h-[400px] mx-auto border-[1px] border-solid border-[#E1E1E1] rounded-[20px] relative py-16'>
      <img className='absolute bottom-0 left-0 z-10' src={handwquotes} alt="" />
      <div className='ml-[200px]  flex flex-col z-20'>
        <div>
          <div className='bebas-neue-regular text-[48px]'>Customer<span className='text-khfm-primary'>Testimonials</span></div>
          <div className='poppins-medium text-4 text-[#888888]'>See what our happy customers have to say.</div>
        </div>
        <img className='absolute z-20 right-16 top-16' src={testimonialsOutlined} alt="" />
        <div className="w-full mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            navigation={true}
            className="py-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className='flex flex-row h-full pl-16'>
                <div className="bg-white rounded-lg border border-gray-200 flex flex-col items-start text-black">
                  <div className="text-4 poppins-medium text-gray-800">
                    {testimonial.name}
                  </div>
                  <p className="text-4 poppins-medium text-[#888888]">{testimonial.location}</p>
                  <img className='max-w-[100px] mt-2' src={fiveStars} alt="" />
                  <p className="mt-2 poppins-regular text-gray-700 text-left text-[15px]">{testimonial.feedback}</p>
                </div>
                <hr className='h-[200px] border-solid border-[1px] border-[#E6E6E6] ml-12'/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
