import Contact from "@/components/Contact";
import Link from "next/link";
import React from "react";
import "../about/about.css";

const page = () => {
  return (
    <div className="bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">
      <section className="about-page page-header">
        <div className="page-header__bg" />
        <div className="page-header__overlay" />
        <div className="container">
          <ul className="page-header__breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Careers</span>
            </li>
          </ul>
          <h2 className="page-header__title">Careers</h2>
        </div>
      </section>
      
      <div className="bg-white px-6 py-16 text-center transition-colors duration-500 dark:bg-black sm:py-10 sm:mt-0 md:-mt-10 md:mb-12">
 
        <div className="flex justify-center mt-10 sm:mt-16 ">
          <span className="w-2 h-2 -mt-5 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase text-xs sm:text-sm md:text-sm mb-2">
          CONTACT WITH BZ
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] font-extrabold leading-12 mb-[50px]">
          Join Bz Team!
        </h1>

        <button className="group relative w-auto overflow-hidden border-2 border-transparent bg-[#f5900d] px-[48px] py-[19px] text-white transition-colors duration-300 hover:border-black">
          <span
            className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-45 
            scale-0 group-hover:scale-100 
            transition-transform duration-500 ease-out"
          ></span>

          <span
            className="relative z-10 transition-colors duration-300 group-hover:text-[#f5900d]"
            style={{
              fontSize: "16px",
              fontWeight: 800,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Apply Now!
          </span>
        </button>
      </div>

      <Contact />
    </div>
  );
};

export default page;
