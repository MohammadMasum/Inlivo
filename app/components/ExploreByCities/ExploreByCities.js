"use client";
import Link from "next/link";
import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ExploreThumb1 from "@/app/assets/images/explore-thumb1.png";
import ExploreThumb2 from "@/app/assets/images/explore-thumb2.png";
import ExploreThumb3 from "@/app/assets/images/explore-thumb3.png";
import ExploreThumb4 from "@/app/assets/images/explore-thumb4.png";

export default function ExploreByCities() {
  const sliderRef = useRef(null);

  const data = [
    {
        "thumbnail": ExploreThumb1,
        "title": 'Zürich',
        "content": '200+ Properties',
    },
    {
        "thumbnail": ExploreThumb2,
        "title": 'Geneva',
        "content": '305+ Properties',
    },
    {
        "thumbnail": ExploreThumb3,
        "title": 'Basel',
        "content": '200+ Properties',
    },
    {
        "thumbnail": ExploreThumb4,
        "title": 'Lausanne',
        "content": '200+ Properties',
    },
    {
        "thumbnail": ExploreThumb2,
        "title": 'Geneva',
        "content": '305+ Properties',
    },
  ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <section className='xl:py-[150px] lg:py-[80px] py-[60px]'>
      <div className="container">
        <div className="grid md:grid-cols-[7fr_5fr] md:mb-[40px] mb-[15px]">
          <div>
            <h2 className='section-title md:text-left text-center'>Explore By Cities</h2>
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
        <div className="explore-slider">
            {data && <Slider ref={sliderRef} {...settings}>
                {data.slice(0,5).map((slide, index) => (
                    <div key={index} className='p-[20px] border border-[#D4D6DD] transition-all duration-300 group hover:border-primary-color'>
                        { slide.thumbnail && <div className="overflow-hidden mb-[20px]"><Image className='h-[270px] w-full object-cover transition-all duration-300 group-hover:scale-[1.2]' src={slide.thumbnail} alt="Explore Thumb1"/></div>}
                        { slide.title && <Link href='/' className='text-[24px] font-monument_extended text-title-color mb-[10px] flex items-center gap-[15px] transition-all duration-300 group hover:underline'>{slide.title} <span className="text-[16px] opacity-0 transition-all duration-300 group-hover:opacity-100"><FaArrowRight />
                        </span></Link>}
                        {slide.content && <p>{slide.content}</p> }
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

