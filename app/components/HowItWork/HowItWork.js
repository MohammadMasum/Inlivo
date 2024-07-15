import React from 'react'
import Image from 'next/image'
import LineShape from '@/app/assets/images/line-shape.png'
import WorksIcon1 from '@/app/assets/images/how-it-work-icon1.svg'
import WorksIcon2 from '@/app/assets/images/how-it-work-icon2.svg'
import WorksIcon3 from '@/app/assets/images/how-it-work-icon3.svg'

export default function HowItWork() {
  return (
    <>
    <section className='xl:py-[150px] lg:py-[80px] py-[60px]'>
        <div className="container">
            <div className="lg:mb-[100px] mb-[40px]">
                <h2 className="section-title text-center">How does it work?</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-[110px] lg:gap-x-[80px] gap-x-[30px] lg:gap-y-0 gap-y-[30px] relative z-10">
                <Image className='lg:block hidden absolute -top-[59px] w-[75%] left-1/2 translate-x-[-50%] -z-10' src={LineShape} alt="line Shape" />
                {/* single box */}
                <div className='p-[30px] border border-[#D4D6DD] bg-white'>
                    <div className='mb-[20px]'>
                        <Image src={WorksIcon1} alt="Works Icon1" />
                    </div>
                    <h4 className='text-[24px] mb-[15px]'>Browse Properties</h4>
                    <p>Select a property that fits your goal from our huge variety of hand-picked properties.</p>
                </div>
                {/* single box */}
                <div className='p-[30px] border border-[#D4D6DD] bg-white'>
                    <div className='mb-[20px]'>
                        <Image src={WorksIcon2} alt="Works Icon2" />
                    </div>
                    <h4 className='text-[24px] mb-[15px]'>View Details & Invest</h4>
                    <p>View detailed metrics for that property like Rental Yield, etc. and invest like institutions</p>
                </div>
                {/* single box */}
                <div className='p-[30px] border border-[#D4D6DD] bg-white'>
                    <div className='mb-[20px]'>
                        <Image src={WorksIcon3} alt="Works Icon3" />
                    </div>
                    <h4 className='text-[24px] mb-[15px]'>Earn and Track</h4>
                    <p>You have full visibility into the performance of your investment. Track your total current.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
