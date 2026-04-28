"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
  btn: string;
  href: string;
};

const homeSlides: Slide[] = [
  {
    img: "/image1.jpeg",
    title: "Future Tech",
    subtitle:
      "AI-driven solutions tailored to innovate and transform digital landscapes.",
    btn: "Learn more about us",
    href: "/about",
  },
  {
    img: "/image2.jpeg",
    title: "Smart Minds",
    subtitle:
      "Crafting seamless UI experiences that elevate user interactions worldwide.",
    btn: "Work with us",
    href: "/contact",
  },
  {
    img: "/image3.jpeg",
    title: "Talk to us",
    subtitle:
      "Innovative code crafted to meet your business needs and goals.",
    btn: "Work with us",
    href: "/contact",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen">
      <div className="relative w-full min-h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${homeSlides[currentIndex].img})`,
            backgroundPosition: "center top",
          }}
          aria-label={homeSlides[currentIndex].title}
        />

        <div className="absolute inset-0">
          <div className="relative mx-auto h-full max-w-7xl">
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 px-4 left-0 md:left-50">
              <h6
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
                className="text-[1.5rem] font-bold text-white md:text-4xl"
              >
                {homeSlides[currentIndex].title}
              </h6>

              <p className="inline-block w-60 text-sm text-white p-lead lead md:min-w-full sm:text-lg md:text-xl mt-4">
                {homeSlides[currentIndex].subtitle}
              </p>

              <Link
                href={homeSlides[currentIndex].href}
                className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden bg-primary px-6 py-3 hover:border-2 hover:border-black sm:px-8 sm:py-4 lg:px-10 lg:py-4"
              >
                <span className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] scale-0 bg-white transition-transform duration-500 ease-out group-hover:scale-100 sm:h-[600%] sm:w-[600%]" />
                <span className="relative z-10 text-sm font-bold text-white transition-colors duration-300 group-hover:text-primary sm:text-base sm:font-extrabold lg:text-[17px]">
                  {homeSlides[currentIndex].btn}
                </span>
              </Link>
            </div>
          </div>

          <div className="absolute right-[70px] top-[40%] z-20 flex -translate-y-1/2 flex-col gap-3 p-0">
            {homeSlides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`lg:text-3xl text-lg cursor-pointer w-7 h-7 rounded-full border-4 hover:text-white hover:bg-white ${
                  currentIndex === slideIndex
                    ? "text-white bg-white border-white"
                    : "border-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
