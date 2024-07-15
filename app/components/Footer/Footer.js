import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import FooterLogo from "@/app/assets/images/footer-logo.svg";
import { FaFacebookF, FaTwitter, } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
    <footer className='bg-[#283253]'>
        <div className='sm:pb-[70px] pb-[40px] border-b border-[#535B75]'>
            <div className="container">
                <div className='text-center xl:py-[100px] lg:pt-[100px] pt-[50px] pb-[40px]'>
                    <h3 className='section-title text-white mb-[25px]'>Want Free Consultation?</h3>
                    <Link href='/' className='font-monument_extended main-title !leading-[1.1] text-white inline-block relative before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0'>Let’s Talk</Link>
                </div>
                <div className='lg:grid grid-cols-[5fr_7fr] gap-[30px]'>
                    <div className='lg:text-left text-center xl:mb-0 mb-[40px]'>
                        <Link className='block xl:mb-[40px] mb-[25px]' href='/'><Image className='xl:mx-0 mx-auto' src={FooterLogo} alt='footer logo' /> </Link>
                        <p className='text-[#E0E0E0] xl:mb-[40px] mb-[25px] max-w-[225px] xl:mx-0 mx-auto'>299 Camryn Locks Apt. 376 West Khalil</p>
                        <ul className='flex lg:justify-start justify-center md:gap-[23px] gap-[15px]'>
                            <li><Link className='h-[40px] w-[40px] border border-white text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-title-color hover:text-white hover:border-black' href='/'><FaFacebookF /></Link></li>
                            <li><Link className='h-[40px] w-[40px] border border-white text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-title-color hover:text-white hover:border-black' href='/'><FaTwitter /></Link></li>
                            <li><Link className='h-[40px] w-[40px] border border-white text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-title-color hover:text-white hover:border-black' href='/'><SlSocialPintarest /></Link></li>
                            <li><Link className='h-[40px] w-[40px] border border-white text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-title-color hover:text-white hover:border-black' href='/'><RiInstagramFill /></Link></li>
                        </ul>
                    </div>
                    <div className='grid sm:grid-cols-3 grid-cols-2 gap-[30px]'>
                        <div>
                            <h4 className='font-dm_sans text-[24px] font-semibold text-white xl:mb-[40px] mb-[25px]'>About</h4>
                            <ul className='grid gap-[15px] sm:text-[20px] text-[#E0E0E0]'>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>About us</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Terms Of Services</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Your Account</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-dm_sans text-[24px] font-semibold text-white xl:mb-[40px] mb-[25px]'>Useful Links</h4>
                            <ul className='grid gap-[15px] sm:text-[20px] text-[#E0E0E0]'>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Payment & Tax</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Collection</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Features</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Contact us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-dm_sans text-[24px] font-semibold text-white xl:mb-[40px] mb-[25px]'>Support</h4>
                            <ul className='grid gap-[15px] sm:text-[20px] text-[#E0E0E0]'>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Account</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Support Center</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>Feedback</Link></li>
                                <li><Link className='transition-all duration-300 hover:text-primary-color' href='/'>About us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[15px] text-center'>
            <div className="container">
                <p className='text-white'>Copyright © inlivo. All Rights Reserved</p>
            </div>
        </div>
    </footer>
    </>
  )
}
