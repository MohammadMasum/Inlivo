"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaTimesCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import HeaderLogo from "@/app/assets/images/logo.svg";
import { IconContext } from "react-icons";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isPropertiesDropdownActive, setIsPropertiesDropdownActive] = useState(false);
  const [isLoanDropdownActive, setIsLoanDropdownActive] = useState(false);
  const currentPage = usePathname();
  console.log(currentPage);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownActive(!isPropertiesDropdownActive);
  };

  const toggleLoanDropdown = () => {
    setIsLoanDropdownActive(!isLoanDropdownActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isActive ? "left-0" : "-left-[100vw]"
        } fixed top-0 h-full w-[100vw] bg-black z-[9999999999999] opacity-50 transition-[opacity] transition-all duration-500`}
        onClick={handleClose}
      ></div>
      <header
        className={`py-[20px] top-0 w-full z-[999999] transition-all duration-300 ${
          isSticky ? "bg-white shadow-lg !py-[20px]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link className="2xl:mr-[50px] mr-[30px]" href="/">
            <Image className="2xl:max-w-[220px] xl:max-w-[150px] max-w-[130px]" src={HeaderLogo} alt="Header logo" />
          </Link>
          <ul className="lg:flex 2xl:space-x-[30px] xl:space-x-[20px] space-x-[15px] text-title-color hidden header-menu">
            <li className="py-[10px]">
              <Link href="/" className="menu-link">Home</Link>
            </li>
            <li className="relative group py-[10px]">
              <Link href="/" className="menu-link">Properties <span><FaAngleDown /></span></Link>
              <ul className="dropdown">
                <li><Link href="/" className="block py-1 transition-all duration-300 text-white hover:text-primary-color">Residential</Link></li>
                <li><Link href="/" className="block py-1 transition-all duration-300 text-white hover:text-primary-color">Commercial</Link></li>
              </ul>
            </li>
            <li className="relative group py-[10px]">
              <Link href="/" className="menu-link">Loan <span><FaAngleDown /></span></Link>
              <ul className="dropdown">
                <li><Link href="/" className="block py-1 transition-all duration-300 text-white hover:text-primary-color">Home Loan</Link></li>
                <li><Link href="/" className="block py-1 transition-all duration-300 text-white hover:text-primary-color">Personal Loan</Link></li>
              </ul>
            </li>
            <li className="py-[10px]">
              <Link href="/" className="menu-link">List your Property</Link>
            </li>
            <li className="py-[10px]">
              <Link href="/" className="menu-link">About us</Link>
            </li>
            <li className="py-[10px]">
              <Link href="/" className="menu-link">Blog</Link>
            </li>
          </ul>
          <ul className="2xl:ml-auto xl:ml-[30px] space-x-[30px] lg:flex items-center hidden">
            <li>
              <Link className="font-medium transition-all duration-300 hover:text-primary-color" href="/">Log in</Link>
            </li>
            <li>
              <Link className="bordered-btn !border-title-color !text-title-color !py-[11px] hover:bg-title-color hover:!text-white" href="/">Join Now <span><FiArrowUpRight /></span></Link>
            </li>
          </ul>
          <div
            className="text-[18px] menu-trigger lg:hidden ml-[15px] h-[30px] w-[30px] flex items-center justify-center rounded-full bg-title-color"
            onClick={handleClick}
          >
            <IconContext.Provider value={{ style: { fill: "#fff" } }}>
              <HiMiniBars3BottomRight />
            </IconContext.Provider>
          </div>
        </div>
      </header>

      <div
        className={`${
          isActive ? "active" : "closed"
        } offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-[99999999999] bg-white top-0 lg:hidden left-[-250px] transition-all`}
      >
        <div className="logo flex items-center gap-[15px] justify-between mb-[30px]">
          <Link href="/">
            <Image width={140} src={HeaderLogo} alt="" />
          </Link>
          <FaTimesCircle className="z-10 text-[20px] text-title-color" onClick={handleClose}></FaTimesCircle>
        </div>
        <ul className="space-y-[10px] text-[16px] header-menu">
          <li>
            <Link href="/" className="menu-link">Home</Link>
          </li>
          <li>
            <div className="flex justify-between items-center cursor-pointer" onClick={togglePropertiesDropdown}>
              <Link href="/" className="menu-link">Properties <span><FaAngleDown /></span></Link>
            </div>
            <ul className={`mobile-dropdown ${isPropertiesDropdownActive ? "max-h-screen" : "max-h-0"} overflow-hidden transition-max-height duration-300`}>
              <div className="h-[15px]"></div>
              <li><Link href="/" className="block px-[15px] py-[5px] transition-all duration-300 text-white hover:text-primary-color">Residential</Link></li>
              <li><Link href="/" className="block px-[15px] py-[5px] transition-all duration-300 text-white hover:text-primary-color">Commercial</Link></li>
              <div className="h-[15px]"></div>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleLoanDropdown}>
              <Link href="/" className="menu-link">Loan <span><FaAngleDown /></span></Link>
            </div>
            <ul className={`mobile-dropdown ${isLoanDropdownActive ? "max-h-screen" : "max-h-0"} overflow-hidden transition-max-height duration-300`}>
              <div className="h-[15px]"></div>
              <li><Link href="/" className="block px-[15px] py-[5px] transition-all duration-300 text-white hover:text-primary-color">Home Loan</Link></li>
              <li><Link href="/" className="block px-[15px] py-[5px] transition-all duration-300 text-white hover:text-primary-color">Personal Loan</Link></li>
              <div className="h-[15px]"></div>
            </ul>
          </li>
          <li>
            <Link href="/" className="menu-link">List your Property</Link>
          </li>
          <li>
            <Link href="/" className="menu-link">About us</Link>
          </li>
          <li>
            <Link href="/" className="menu-link">Blog</Link>
          </li>
        </ul>
        <ul className="mt-[10px] space-y-[10px]">
          <li>
            <Link className="font-medium transition-all duration-300 hover:text-primary-color" href="/">Log in</Link>
          </li>
          <li>
            <Link className="bordered-btn !border-title-color !text-title-color !py-[11px] hover:bg-title-color hover:!text-white" href="/">Join Now <span><FiArrowUpRight /></span></Link>
          </li>
        </ul>
      </div>
    </>
  );
}
