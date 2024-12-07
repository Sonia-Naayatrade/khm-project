import React from 'react'
import contactUsTextOutlined from '../../../assets/Home/Contact/Contact Us.svg'

const ContactUs = () => {
    return (
        <div className='w-full bg-[#F8F8F8]'>
        <div className='w-[1340px] mx-auto flex flex-col pt-[28px] pb-[100px]'>
            <div className='w-full flex flex-row justify-between'>
                <div>
                    <div className='bebas-neue-regular text-[48px]'>GET IN <span className='text-khfm-primary'>TOUCH</span></div>
                    <div className='poppins-medium text-4 text-[#888888]'>We would like to hear from You!<br />
                        Contact us anytime — we’re always ready to help.</div>
                </div>
                <img className='' src={contactUsTextOutlined} alt="" />
            </div>
            <div className='w-full flex flex-row justify-between mt-4'>
                <div className='flex flex-col gap-[85px] mt-[27px]'>
                    <div className='flex flex-row mt-4 gap-[60px]'>
                        <div className='flex flex-col gap-1'>
                            <div className='bebas-neue-regular text-[20px]'>Office Address:</div>
                            <div className='poppins-medium text-4 text-[#888888]'>01, Nirma Plaza, Makhwana Road,<br /> Marol Naka, Andheri (East),<br /> Mumbai - 400 059</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='bebas-neue-regular text-[20px]'>Business Hours:</div>
                            <div className='poppins-medium text-4 text-[#888888]'>Monday to Saturday,<br />
                                9:00 AM to 6:00 PM</div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4 gap-[197px]'>
                        <div className='flex flex-col gap-1'>
                            <div className='bebas-neue-regular text-[20px]'>Phone Numbers:</div>
                            <div className='poppins-medium text-4 text-[#888888]'>+91 9987870000<br />
                                +91 8655663022</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='bebas-neue-regular text-[20px]'>Email :</div>
                            <div className='poppins-medium text-4 text-[#888888]'>enq@khfm.in</div>
                        </div>
                    </div>
                </div>
                <iframe className='w-[681px] h-[339px] rounded-[20px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257110.21126185646!2d72.71291603291789!3d19.125609072895905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c992034c01e3%3A0xf3d0197e57492029!2sKHFM&#39;s%20Hospitality%20%26%20Facility%20Management%20Services%20Ltd!5e0!3m2!1sen!2sin!4v1733553803287!5m2!1sen!2sin&z=15" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    )
}

export default ContactUs