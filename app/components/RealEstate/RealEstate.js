import React from 'react'
import Image from "next/image";
import RealEstateBg from "@/app/assets/images/real-estate-bg.png";
import RealEstateIcon1 from "@/app/assets/images/real-estate-icon1.svg";
import RealEstateIcon2 from "@/app/assets/images/real-estate-icon2.svg";
import RealEstateIcon3 from "@/app/assets/images/real-estate-icon3.svg";

export default function RealEstate() {
  return (
    <>
    <section id="real_estate" className='md:py-[100px] py-[40px] bg-cover bg-center' style={{ backgroundImage: `url(${RealEstateBg.src})` }}>
        <div className="container">
            <div className='text-center lg:mb-[50px] mb-[30px]'>
                <h2 className="section-title mb-[15px]">Why Invest in Real Estate?</h2>
                <p>Start building your real estate investment portfolio today with as little as € 100.</p>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {/* single real estate box */}
                <div className='bg-white py-[50px] px-[28px]'>
                    <div className='mb-[30px]'>
                        <Image className="" src={RealEstateIcon1} alt="Real Estate Icon1"/>
                    </div>
                    <h4 className='mb-[10px] text-[24px] text-black'>Secure Investment</h4>
                    <p>Pellentesque molestie, quam ac porttitor venenatis ipsum.</p>
                </div>
                {/* single real estate box */}
                <div className='bg-white py-[50px] px-[28px]'>
                    <div className='mb-[30px]'>
                        <Image className="" src={RealEstateIcon2} alt="Real Estate Icon2"/>
                    </div>
                    <h4 className='mb-[10px] text-[24px] text-black'>Transparent Platform</h4>
                    <p>Pellentesque molestie, quam ac porttitor venenatis ipsum.</p>
                </div>
                {/* single real estate box */}
                <div className='bg-white py-[50px] px-[28px]'>
                    <div className='mb-[30px]'>
                        <Image className="" src={RealEstateIcon3} alt="Real Estate Icon3"/>
                    </div>
                    <h4 className='mb-[10px] text-[24px] text-black'>Cash out any time</h4>
                    <p>Pellentesque molestie, quam ac porttitor venenatis ipsum.</p>
                </div>
                {/* single real estate box */}
                <div className='bg-white py-[50px] px-[28px]'>
                    <div className='mb-[30px]'>
                        <Image className="" src={RealEstateIcon3} alt="Real Estate Icon3"/>
                    </div>
                    <h4 className='mb-[10px] text-[24px] text-black'>Reinvest</h4>
                    <p>Pellentesque molestie, quam ac porttitor venenatis ipsum.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
