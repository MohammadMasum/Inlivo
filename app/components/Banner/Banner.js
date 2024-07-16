import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import HomeIcon from "@/app/assets/images/home.svg";
import Trustpilot from "@/app/assets/images/trustpilot.svg";

export default function Banner() {
  return (
    <>
    <section className='banner-area bg-hero-banner-mobile md:bg-hero-banner-desktop relative z-10 overflow-hidden md:py-[150px] py-[60px] bg-cover md:bg-top bg-bottom'>
        <div className='container'>
            <div className="md:grid grid-cols-2 items-center">
                <div className="relative">
                    <p className="inline-block bg-white/15 text-white p-[10px] 2xl:mb-[30px] mb-[20px]">A Smarter, Better Way to Invest</p>
                    <h1 className="main-title 2xl:mb-[30px] mb-[15px] text-white">Invest in the Future of Real Estate</h1>
                    <p className="2xl:text-[24px] xl:text-[20px] text-[16px] text-white 2xl:mb-[50px] mb-[30px]">Start earning monthly rental income and capital growth with our property-backed investments</p>
                    <div className="flex items-center gap-8">
                        <Link href="#real_estate" className="flex group">
                            <span className="bg-title-color text-white h-[60px] flex items-center justify-center py-[15px] px-[25px] transition-all duration-300 group-hover:bg-white group-hover:text-title-color">Start Investing</span>
                            <span className="h-[60px] w-[60px] flex items-center justify-center bg-white transition-all duration-300 group-hover:bg-title-color group-hover:text-white"><FiArrowUpRight /></span>
                        </Link>
                    </div>
                    <div className="bg-white inline-flex items-center md:py-[20px] py-[16px] md:px-[30px] px-[20px] gap-[10px] md:min-w-[280px] min-w-[193px] md:absolute top-0 left-[120%] md:mt-0 mt-[68px] md:ml-0 ml-[50px] md:mb-0 mb-[145px]">
                        <div>
                            <Image className="md:max-w-[40px] max-w-[30px]" src={HomeIcon} alt="Home Icon"/>
                        </div>
                        <div>
                            <h4 className="md:text-[24px] text-[16px]">$255.36</h4>
                            <p className="md:text-[18px] text-[12px]">Mortgage Per Month</p>
                        </div>
                    </div>
                    <Image className="md:absolute bottom-0 left-[120%]" src={Trustpilot} alt="Home Icon"/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
