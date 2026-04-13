"use client";

import React, { useState } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const Slide = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="bg-black flex flex-col items-center w-full">
        <div className="relative w-full max-w-[1520px] h-[350px] sm:h-[650px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {/* ===== SLIDE 1 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              {/* Image */}
              <img
                src="newssingle1.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[310px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
    <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
  <span className="text-[14px] font-normal">News</span>
</h1>

                <h1 className="text-lg sm:text-4xl text-black leading-snug mb-3 sm:mb-5 font-semibold">
                  From Vision to Reality: <br />
                  BzAnalytics's Journey from <br /> 2020 to 2023
                </h1>

                {/* Meta */}
                <span className="text-black font-semibold text-xs sm:text-sm">
                  April 16, 2024{" "}
                  <span className="text-black ml-6"> • 10 min read</span>
                </span>
              </div>
            </div>

            {/* ===== SLIDE 2 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              <img
                src="newssingle2.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[340px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
  <span className="text-[14px] font-normal">News</span>
</h1>

                <h1 className="text-lg sm:text-4xl text-black leading-tight mb-3 sm:mb-5 font-semibold">
                 BzAnalytics and CloudQ Forge <br />
                  a Formidable Alliance to <br />Redefine Business Solutions in 2023
                </h1>

                {/* Meta */}
                <span className="text-black font-semibold text-xs sm:text-sm">
                  July 29, 2023{" "}
                  <span className="text-black ml-6"> • 10 min read</span>
                </span>
              </div>
            </div>

            {/* ===== SLIDE 3 ===== */}
            <div className="min-w-full h-full relative flex items-end">
              <img
                src="newssingle3.jpg"
                className="absolute inset-0 w-full h-[300px] sm:h-[550px] object-cover rounded-2xl"
                alt=""
              />

              {/* White Card */}
              <div
                className={`relative mb-3 sm:mb-6 ml-3 sm:ml-10 
  w-[80%] sm:w-[633px] h-[250px] sm:h-[390px] bg-white 
  px-3 py-4 sm:px-8 sm:py-10
  rounded-2xl 
  shadow-2xl border border-gray-200
  ${plusJakarta.className}`}
              >
                  <h1 className="flex items-center text-xs sm:text-sm font-semibold text-[rgb(73,0,167)] mb-3 sm:mb-4">
  <span className="w-[16px] h-[16px] bg-[rgb(73,0,167)] rounded-full mr-2"></span>
  <span className="text-[14px] font-normal">News</span>
</h1>

                <h1 className="text-lg sm:text-4xl text-black leading-tight mb-3 sm:mb-5 font-semibold">
                  BzAnalytics Achieves <br />
                  Outstanding Recognition:
                  <br /> Among Top 5 Companies at <br />Prestigious Entrepreneurship <br />Expo
                </h1>

                {/* Meta */}
                <span className="text-black font-semibold text-xs sm:text-sm">
                  November 30, 2023{" "}
                  <span className="text-black ml-6"> • 10 min read</span>
                </span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="flex justify-center space-x-3 mb-8 w-full px-4">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? "bg-[#f79d0f] " : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;