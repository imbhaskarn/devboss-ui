import React from "react";
import RootLayout from "../layout";

import CoverStory from "@/components/home/CoverStory";

const HomePage: React.FC = () => {
  return (
    <main className="flex justify-center items-center">
      <section className=" flex border border-red-600">
        <section className="max-w-7xl flex border border-red-600 px-8 bg-gray-50">
          <CoverStory />
        </section>
        <section className="max-w-80 min-w-80 flex border border-blue-600">
          <section className="flex border border-red-600"></section>
          <section className="flex border border-red-600"></section>
        </section>
      </section>
    </main>
  );
};

export default HomePage;
