"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
