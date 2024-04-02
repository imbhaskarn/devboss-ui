import React from "react";
import RootLayout from "../layout";

import CoverStory from "@/components/home/CoverStory";
import SideBar from "@/components/home/SideBar";

const HomePage: React.FC = () => {
  return (
    <main className="flex justify-center items-center">
      <section className=" flex max-w-7xl justify-center">
        <section className="flex flex-col gap-8 max-w-6xl rounded-lg container">
          <CoverStory />
        </section>
        <section className="flex flex-col max-w-96 rounded-lg container">
          <SideBar />
        </section>
      </section>
    </main>
  );
};

export default HomePage;
