import React from "react";
import RootLayout from "../layout";

import CoverStory from "@/components/home/CoverStory";
import SideBar from "@/components/home/SideBar";

const HomePage: React.FC = () => {
  return (
    <main className="flex justify-center items-center">
      <section className="w-full sm:flex justify-center items-start py-8 px-4  sm:p-8 gap-0 sm:max-w-screen-xl lg:gap-4">
        <span>
          <CoverStory />
        </span>
        <span>
          <SideBar />
        </span>
      </section>
    </main>
  );
};

export default HomePage;
