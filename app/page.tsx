import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Home from "@/components/Home";
import Homeshowcase from "@/components/about/Homeshowcase";
import HomeReview from "@/components/about/HomeReview";
import "./about/about.css";

import React from "react";

const page = () => {
  return (
    <>
      <Home />
      <Homeshowcase />
      <HomeReview />
    </>
  );
};

export default page;
