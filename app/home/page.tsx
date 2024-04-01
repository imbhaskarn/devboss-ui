import React from "react";
import RootLayout from "../layout";

import CoverStory from "@/components/home/CoverStory";

const HomePage: React.FC = () => {
  return (
    <main className="flex justify-center items-center">
      <section className=" flex borde gap-4">
        <section className="flex flex-col gap-8 max-w-4xl rounded-lg">
          <CoverStory />
        </section>
        <section className="max-w-80  flex border border-blue-600">
          <section className="flex border"></section>
          <section className="flex border"></section>
        </section>
      </section>
    </main>
  );
};

export default HomePage;
