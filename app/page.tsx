import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Hero from "@/components/Hero";


import React from "react";

const page = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen w-full container">

        <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      </main>
      
    </>
  );
};

export default page;
