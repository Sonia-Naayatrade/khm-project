import React, { useState } from 'react'
import faqPerson from '../../../assets/Home/FAQ/faqPerson.png'
import dropdownArrow from '../../../assets/Home/FAQ/dropdownArrow.svg'
import FAQtextOutlined from '../../../assets/Home/FAQ/FAQtextOutlined.svg'

const accordionData = [
    {
        question: "Are your pest control treatments safe for children and pets ?",
        answer: "Yes, our treatments are carefully chosen and applied to ensure the safety of children and pets. We use eco-friendly products whenever possible.",
    },
    {
        question: "How often should I schedule pest control services ?",
        answer: "We recommend scheduling pest control services every three months to prevent infestations and maintain a pest-free environment.",
    },
    {
        question: "Do you offer customized plans for businesses ?",
        answer: "Absolutely! We provide tailored pest control plans to meet the unique needs of businesses across various industries.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='w-[1340px] mx-auto flex flex-row gap-[50px] my-16'>
            <img className='w-[400] h-[465px]' src={faqPerson} alt="" />
            <div className='w-full flex flex-col relative'>
                <img className='absolute z-20 right-0 -top-4' src={FAQtextOutlined} alt="" />
                <div className='bebas-neue-regular text-[48px]'>Frequently Asked <span className='text-khfm-primary'>Questions</span></div>
                <hr className='w-full border-solid border-[1px] border-[#E6E6E6] mt-[32px] mb-2' />
                <div className="w-full flex flex-col gap-2">
                    {accordionData.map((item, index) => (
                        <>
                        <div
                            key={index}
                            className="border-b border-gray-200 py-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-[18px] poppins-semibold text-khfm-primary">
                                    {item.question}
                                </div>
                                <div
                                    className={`transform transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <img src={dropdownArrow} alt="" />
                                </div>
                            </div>
                            {activeIndex === index && (
                                <div className="mt-2 poppins-semibold text-gray-600">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                        <hr className='w-full border-solid border-[1px] border-[#E6E6E6]' />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ