import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Language = {
  code: string;
  label: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", label: "EN", flag: "/usa.png" },
  { code: "hi", label: "HI", flag: "/india.png" },
  { code: "ar", label: "AR", flag: "/uae.png" },
];

export default function LanguageSelect() {
  const [openLang, setOpenLang] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpenLang((prev) => !prev)}
        className="flex items-center gap-2 text-[14px] font-semibold text-white"
      >
        <Image
          src={selectedLang.flag}
          alt={selectedLang.label}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />

        {selectedLang.label}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" transition-all duration-500"
        >
          {openLang ? (
            <path d="m18 15-6-6-6 6" />
          ) : (
            <path d="m6 9 6 6 6-6" />
          )}
        </svg>
      </button>

      {/* Dropdown */}
      {openLang && (
        <div className="absolute mt-1 w-[90px] bg-[#101010] shadow-lg  overflow-hidden z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setOpenLang(false);
              }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary"
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-white">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}