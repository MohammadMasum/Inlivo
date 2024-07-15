"use client";
import Link from "next/link";
import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ClientAvatar1 from "@/app/assets/images/client-avatar1.svg";
import ClientAvatar2 from "@/app/assets/images/client-avatar2.svg";
import Rating from '@/app/components/Rating/Rating';

export default function CustomerReview() {
  const sliderRef = useRef(null);

    const data = [
        {
            "message": "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
            "avatar": ClientAvatar1,
            "name": "Jane Smith",
            "designation": "Freelance Designer",
            "rating": 5,
        },
        {
            "message": "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
            "avatar": ClientAvatar2,
            "name": "Tom Williams",
            "designation": "Software Developer",
            "rating": 3,
        },
        {
            "message": "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
            "avatar": ClientAvatar2,
            "name": "Jane Smith",
            "designation": "Freelance Designer",
            "rating": 3,
        },
    ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <section className='xl:pb-[150px] lg:pb-[80px] pb-[60px]'>
      <div className="container">
        <div className="grid md:grid-cols-[8fr_4fr] mb-[40px] items-center">
          <div className="md:text-left text-center">
            <h2 className='section-title mb-[15px]'>Investors Trust Us</h2>
            <p className="2xl:text-[24px] lg:text-[18px] text-[16px] font-medium text-title-color">Trusted by Over 40,000 Worldwide Customer since 2020</p>
          </div>
          <div className="md:block hidden">
            <div className="slick-slider-arrow flex justify-end gap-x-[15px]">
              <span
                className='arrow-prev flex items-center justify-center h-[50px] w-[50px] bg-[#E4F3E5] text-primary-color cursor-pointer transition-all duration-300 hover:bg-primary-color hover:text-white'
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaAngleLeft />
              </span>
              <span
                className='arrow-next flex items-center justify-center h-[50px] w-[50px] bg-[#E4F3E5] text-primary-color cursor-pointer transition-all duration-300 hover:bg-primary-color hover:text-white'
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
        <div className="customer-slider">
            {data && <Slider ref={sliderRef} {...settings}>
                {data.slice(0,3).map((slide, index) => (
                    <div key={index} className='py-[40px] px-[30px] border border-[#D4D6DD] text-center'>
                        {slide.message && <p className="sm:mb-[25px] mb-[15px] sm:text-[16px] text-[14px]">{slide.message}</p> }
                        <div className="flex justify-center gap-[6px] sm:mb-[20px] mb-[15px]">
                            <Rating rating={slide.rating} />
                        </div>
                        <div className=""> 
                            { slide.avatar && <Image className='mx-auto mb-[5px]' src={slide.avatar} alt=" avatar"/>}
                            { slide.name && <p className="text-[18px] text-title-color font-semibold mb-[5px]">{slide.name}</p> }
                            { slide.designation && <p className="text-[14px]">{slide.designation}</p> }
                        </div>
                        
                        
                    </div>
                ))}
            </Slider> }
        </div>
        <div className="md:hidden block mt-[25px]">
            <div className="slick-slider-arrow flex md:justify-end justify-center gap-x-[15px]">
              <span
                className='arrow-prev flex items-center justify-center md:h-[50px] h-[40px] md:w-[50px] w-[40px] bg-[#E4F3E5] text-primary-color cursor-pointer transition-all duration-300 hover:bg-primary-color hover:text-white'
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaAngleLeft />
              </span>
              <span
                className='arrow-next flex items-center justify-center md:h-[50px] h-[40px] md:w-[50px] w-[40px] bg-[#E4F3E5] text-primary-color cursor-pointer transition-all duration-300 hover:bg-primary-color hover:text-white'
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaAngleRight />
              </span>
            </div>
          </div>
      </div>
    </section>
  );
}

