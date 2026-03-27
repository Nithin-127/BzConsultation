"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 left-2 z-50">
      <button
       
      
        onClick={toggleTheme}
        className="p-2 bg-black text-white font-bold border-2 cursor-pointer border-white hover:bg-white hover:border-2 hover:border-black hover:text-primary transition-all duration-100"
      >
        Light/Dark
      </button>
    </div>
  );
}