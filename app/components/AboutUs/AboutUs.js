'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import AboutThumb from "@/app/assets/images/about-thumb.png";

const Counter = ({ end, label, speed }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = Math.ceil(end / speed);
    const counter = setInterval(() => {
      start += increment;
      if (start > end) start = end;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, 100); // Faster update interval
  }, [isVisible, end, speed]);

  return (
    <div ref={ref}>
      <h3 className='2xl:text-[36px] lg:text-[28px] md:text-[18px] text-[14px] mb-[5px]'>{count} <span>+</span></h3>
      <p className='lg:text-[16px] md:text-[14px] text-[10px] text-[#535B75]'>{label}</p>
    </div>
  );
};

export default function AboutUs() {
  return (
    <>
      <section className='xl:py-[150px] lg:py-[80px] py-[60px]'>
        <div className="container">
          <div className="grid md:grid-cols-2 xl:gap-x-[100px] gap-x-[50px]">
            <div className='md:mb-0 mb-[40px]'>
              <h2 className="section-title xl:mb-[20px] mb-[15px] text-black">About Us</h2>
              <h3 className='2xl:text-[36px] xl:text-[28px] text-[24px] font-dm_sans font-medium text-black mb-[20px]'>
                Investing in real estate is now easier than buying stocks
              </h3>
              <p className='xl:text-[24px] text-[18px] mb-[15px]'>
                Make property Investing in simple, accessible and transparent
              </p>
              <p className='xl:mb-[40px] mb-[30px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s&lsquo; 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className='sm:flex items-start 2xl:gap-x-[200px] xl:gap-x-[100px] sm:gap-x-[30px]'>
                <Link href="/" className="primary-btn sm:mb-0 mb-[20px]">
                    Learn More <span><FiArrowUpRight /></span>
                </Link>
                <div className='flex sm:gap-[40px] gap-[15px] bg-white sm:mr-[-400px]'>
                    {/* counter items */}
                    <Counter end={1200} label="Premium Property" speed={30} />
                    <Counter end={4500} label="Happy Customer" speed={30} />
                    <Counter end={15} label="Years Experience" speed={30} />
                </div>
              </div>
              
            </div>
            <div>
              <Image className="" src={AboutThumb} alt="About Thumb" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
