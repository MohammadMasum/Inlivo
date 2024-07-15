'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import Image from 'next/image';
import FeaturesPropertiesThumb1 from "@/app/assets/images/properties-thumb1.png";
import FeaturesPropertiesThumb2 from "@/app/assets/images/properties-thumb2.png";

export default function FeaturedProperties() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const data = [
    {
      "thumbnail":  FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail":  FeaturesPropertiesThumb2,
      "title": "Zürich2",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail":  FeaturesPropertiesThumb2,
      "title": "Zürich3",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    }
  ]

  return (
    <>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-[8fr_4fr] md:mb-[40px] mb-[15px] items-center">
            <div>
              <h2 className='section-title md:text-left text-center'>Featured Properties</h2>
            </div>
            <div className='lg:flex hidden justify-end'>
              <Link href="/" className="primary-btn"> Browse All Properties <span><FiArrowUpRight /></span></Link>
            </div>
          </div>
          <div className='grid lg:grid-cols-[4fr_8fr] grid-cols-1 items-center gap-[30px] border border-[#D4D6DD] 2xl:p-[30px] p-[24px] mb-[30px]'>
            <div>
              <Image className='w-full h-[390px] object-cover' src={FeaturesPropertiesThumb1} alt="Properties Thumb1" />
            </div>
            <div>
                <div className='flex sm:flex-row flex-col sm:items-center sm:justify-between gap-[30px] mb-[30px]'>
                    <div>
                        <h3 className='md:text-[36px] text-[24px] mb-[10px]'>Zürich</h3>
                        <div className='flex items-center gap-[10px]'><span className='text-[20px] -mt-[3px]'><LuMapPin /></span> 8706 Herrick Ave, Zürich</div>
                    </div>
                    <div>
                        <div className='flex items-center gap-[8px] mb-[10px]'><span className='text-[20px]'><FaRegClock /></span> Left to invest</div>
                        <div className="flex items-center gap-x-[10px]">
                            {/* days  */}
                            <div className='text-center'>
                                <div className='h-[42px] w-[42px] flex items-center justify-center bg-[#E4F3E5] text-primary-color'>{timeLeft.days || '0'}</div>
                                <label className='text-[12px]'>Days</label>
                            </div>
                            {/* hours  */}
                            <div className='text-center'>
                                <div className='h-[42px] w-[42px] flex items-center justify-center bg-[#E4F3E5] text-primary-color'>{timeLeft.hours || '0'}</div>
                                <label className='text-[12px]'>Hrs</label>
                            </div>
                            {/* minutes  */}
                            <div className='text-center'>
                                <div className='h-[42px] w-[42px] flex items-center justify-center bg-[#E4F3E5] text-primary-color'>{timeLeft.minutes || '0'}</div>
                                <label className='text-[12px]'>Min</label>
                            </div>
                            {/* seconds  */}
                            <div className='text-center'>
                                <div className='h-[42px] w-[42px] flex items-center justify-center bg-[#E4F3E5] text-primary-color'>{timeLeft.seconds || '0'}</div>
                                <label className='text-[12px]'>Sec</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[10px] w-full bg-[#E4F3E5] mb-[15px]">
                    <div className='h-[10px] bg-primary-color' style={{ width: `50%` }}></div>
                </div>
                <div className='flex items-center justify-between gap-[10px] mb-[30px]'>
                    <p className='text-title-color'>119 Investors | $4,94,196 (54.73%)</p>
                    <p className='text-title-color font-semibold'>$1,00,000 Goal</p>
                </div>
                <div className='flex flex-wrap 2xl:gap-x-[45px] gap-[30px] mb-[30px]'>
                    <div>
                        <h5 className='font-dm_sans text-[18px] text-title-color font-normal mb-[5px]'>Annual Return</h5>
                        <p className='text-[20px] text-primary-color font-semibold'>7.5% + 3%</p>
                    </div>
                    <div className='h-[30px] w-[1px] bg-[#A9ADBA] sm:block hidden'></div>
                    <div>
                        <h5 className='font-dm_sans text-[18px] text-title-color font-normal mb-[5px]'>Maximum Term</h5>
                        <p className='text-[20px] text-primary-color font-semibold'>26 Months</p>
                    </div>
                    <div className='h-[30px] w-[1px] bg-[#A9ADBA] sm:block hidden'></div>
                    <div>
                        <h5 className='font-dm_sans text-[18px] text-title-color font-normal mb-[5px]'>Property Type</h5>
                        <p className='text-[20px] text-primary-color font-semibold'>Commercial</p>
                    </div>
                    <div className='h-[30px] w-[1px] bg-[#A9ADBA] sm:block hidden'></div>
                    <div>
                        <h5 className='font-dm_sans text-[18px] text-title-color font-normal mb-[5px]'>Distribution</h5>
                        <p className='text-[20px] text-primary-color font-semibold'>Monthly</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-[20px]">
                    <Link href="/" className="primary-btn">Invest Now <span><FiArrowUpRight /></span></Link>
                    <Link href="/" className="primary-btn !bg-white !text-primary-color shadow-[0_20px_20px_rgba(40,50,83,0.1)]">More Details</Link>
                </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {data && data.map((item, index) => (
              <div key={index} className='2xl:p-[30px] p-[24px] border border-[#D4D6DD]'>
                {item.thumbnail && <Image className='w-full h-[255px] object-cover mb-[20px]' src={item.thumbnail} alt="featured properties thumb 2" /> }
                <div>
                  {item.title && <h4 className='text-[24px] mb-[10px]'>{item.title}</h4> }
                  {item.location && <div className='flex items-center gap-[10px] mb-[10px]'><span className='text-[20px] -mt-[3px]'><LuMapPin /></span>{item.location}</div> }
                  <div className="h-[10px] w-full bg-[#E4F3E5] mb-[15px]">
                      <div className='h-[10px] bg-primary-color' style={{ width: `70%` }}></div>
                  </div>
                  {item.investors && <p className='text-title-color mb-[30px]'>{item.investors}</p> }
                  <Link href="/" className="bordered-btn">Invest Now <span><FiArrowUpRight /></span></Link>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:hidden justify-center mt-[25px] flex'>
              <Link href="/" className="primary-btn"> Browse All Properties <span><FiArrowUpRight /></span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
