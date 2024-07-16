'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { GoListUnordered } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import FeaturesPropertiesThumb2 from "@/app/assets/images/properties-thumb2.png";

export default function Properties() {
  const [view, setView] = useState('grid'); // State to manage the view

  const data = [
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
    {
      "thumbnail": FeaturesPropertiesThumb2,
      "title": "Zürich",
      "location": "8706 Herrick Ave, Zürich",
      "investors": "119 Investors | $4,94,196 (54.73%)",
    },
  ];

  return (
    <>
      <section className='xl:pb-[150px] lg:pb-[80px] pb-[60px]'>
        <div className="container">
          <div className='grid md:grid-cols-2 lg:mb-[50px] mb-[30px]'>
            <div className='flex md:justify-end justify-center md:mb-0 mb-[20px] gap-[5px] md:order-2 '>
              <select className='h-[50px] border border-black/10 text-[16px] px-[20px] w-[225px]' name="shorting" id="shorting">
                <option value="short_by">Short By</option>
                <option value="short_by">Short By 1</option>
                <option value="short_by">Short By 1</option>
              </select>
              {/* Grid view */}
              <div className={`flex items-center justify-center h-[50px] w-[50px] min-w-[50px] cursor-pointer ${view === 'grid' ? 'bg-primary-color text-white' : 'border border-black/10'}`} onClick={() => setView('grid')}>
                <TfiLayoutGrid2 />
              </div>
              {/* List view */}
              <div className={`flex items-center justify-center h-[50px] w-[50px] min-w-[50px] cursor-pointer ${view === 'list' ? 'bg-primary-color text-white' : 'border border-black/10'}`} onClick={() => setView('list')}>
                <GoListUnordered />
              </div>
            </div>
            <p className='text-[24px] md:order-1 md:text-left text-center'>Showing <span className='text-primary-color'>505</span> properties</p>
          </div>
          {/* Properties items */}
          <div className={`grid ${view === 'grid' ? 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]' : 'grid-cols-1 gap-[30px]'}`}>
            {data && data.map((item, index) => (
              <div key={index} className={`2xl:p-[30px] p-[24px] border border-[#D4D6DD] ${view === 'list' ? 'flex sm:gap-x-[30px] gap-x-[15px] sm:items-center' : ''}`}>
                {item.thumbnail && ( <Image className={`w-full h-[255px] object-cover mb-[20px] ${view === 'list' ? 'w-[40%] sm:!h-full !h-[150px]' : ''}`} src={item.thumbnail} alt="featured properties thumb 2" />
)}

                <div>
                  {item.title && <h4 className='text-[24px] mb-[10px]'>{item.title}</h4>}
                  {item.location && <div className='flex items-center gap-[10px] mb-[10px]'><span className='text-[20px] -mt-[3px]'><LuMapPin /></span>{item.location}</div>}
                  <div className="h-[10px] w-full bg-[#E4F3E5] mb-[15px]">
                    <div className='h-[10px] bg-primary-color' style={{ width: `70%` }}></div>
                  </div>
                  {item.investors && <p className='text-title-color mb-[30px]'>{item.investors}</p>}
                  <Link href="/" className="bordered-btn">Invest Now <span><FiArrowUpRight /></span></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="grid xl:mt-[100px] lg:mt-[50px] mt-[25px]">
            <ul className='flex flex-wrap justify-center sm:gap-[15px] gap-[6px] items-center'>
              {/* Disabled */}
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border bg-[#EAEBEE] border-[#EAEBEE] text-[#283253]/30 font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 pointer-events-none'><FaAngleLeft /></Link></li>
              {/* Current */}
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-primary-color text-primary-color font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 hover:border-primary-color hover:text-primary-color current'>1</Link></li>
              {/* Other */}
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-[#D4D6DD] text-[#535B75] font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 hover:border-primary-color hover:text-primary-color'>2</Link></li>
              {/* Skip */}
              <li><span className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-[#D4D6DD] text-[#535B75] font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300'>...</span></li>
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-[#D4D6DD] text-[#535B75] font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 hover:border-primary-color hover:text-primary-color'>9</Link></li>
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-[#D4D6DD] text-[#535B75] font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 hover:border-primary-color hover:text-primary-color'>10</Link></li>
              <li><Link href="#" className='flex items-center sm:text-[18px] text-[12px] justify-center rounded-[6px] border border-[#D4D6DD] text-[#535B75] font-bold sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] transition-all duration-300 hover:border-primary-color hover:text-primary-color'><FaAngleRight /></Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
