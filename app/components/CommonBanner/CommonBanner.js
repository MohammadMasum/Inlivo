import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";
import CommonBannerThumb from "@/app/assets/images/common-banner-thumb.png"

export default function CommonBanner() {
  return (
    <>
    <section className='relative bg-title-color z-10 md:py-[110px] pt-[30px]'>
        <div className="container">
            <div>
                <h2 className="section-title text-white mb-[30px]">Browse Properties</h2>
                <div className='inline-flex items-center gap-[10px] bg-[#48516D] text-white py-[10px] px-[30px]'>
                    <Link href="/">Home</Link>
                    <span className='text-[16px] text-primary-color'><FaAngleRight /></span>
                    <span>Properties</span>
                </div>
            </div>
        </div>
        <Image className='md:absolute right-0 bottom-0 -z-10 xl:h-[90%] h-auto xl:w-auto lg:w-[500px] md:w-[400px] w-full md:mt-0 mt-[40px]' src={CommonBannerThumb} alt="common banner thumb" />
    </section>
    </>
  )
}
