import HomeHero from "@/components/home-hero";
import Home from "@/components/Home";

const page = () => {
  return (
    <>
      <HomeHero />
      <Home showHero={false} />
    </>
  );
};

export default page;
