import React from 'react'

const Threecard = () => {
  return (
    <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 items-stretch">
      {/* card1 */}
  
            <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="/newssingle1.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="news"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-orange-400">
                  <span className="text-xl sm:text-3xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>News</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                 From Vision to Reality: BzAnalytics's Journey from 2020 to 2023
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 Apr 16 • 10 min read
                </span>
              </div>
            </div>
       
      {/* card2 */}
      <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="/newssingle2.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="news"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-orange-400">
                  <span className="text-xl sm:text-3xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>News</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
                BzAnalytics and CloudQ Forge a Formidable Alliance to Redefine Business Solutions in 2023
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 July 29 • 10 min read
                </span>
              </div>
            </div>
            {/*card3  */}
             <div className="w-full max-w-[374px] h-full bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_6px_20px_rgba(0,0,0,0.19)] pt-[10px] px-[10px] pb-[20px] flex flex-col text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[30px] tracking-[0.5px] transition-transform duration-300 ease-in hover:scale-105">
              <img
                src="/newssingle3.jpg"
                className="w-full h-[160px] sm:h-[180px] object-cover rounded-[10px]"
                alt="news"
              />

              <div className="flex flex-col flex-grow gap-[6px] mt-[8px]">
                <div className="flex items-center text-orange-400">
                  <span className="text-xl sm:text-3xl mr-2 -translate-y-1">
                    •
                  </span>
                  <span>News</span>
                </div>

                <h6 className="text-black font-semibold text-[18px] leading-[22px] mb-2 tracking-[0.5px] line-clamp-2">
             BzAnalytics Achieves Outstanding Recognition: Among Top 5 Companies at Prestigious Entrepreneurship Expo
                </h6>

                <span className="text-black text-xs sm:text-sm mt-1">
                 Nov 30 • 10 min read
                </span>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Threecard