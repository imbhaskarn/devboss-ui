"use client";

import React, { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      {" "}
      <nav className="py-4 w-full bg-indigo-50">
        <div className="flex flex-col px-8 mx-auto max-w-screen-2xl  lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-between lg:justify-center">
            <span className="text-center py-2 text-white px-6 rounded-lg bg-indigo-500 button-shadow hover:bg-indigo-600">
              <a href="#">Navbar</a>
            </span>

            <button
              className="block lg:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <span onClick={() => setIsOpen(!isOpen)}>
                  <Cross1Icon className="text-zinc-800 w-6 h-6" />
                </span>
              ) : (
                <span onClick={() => setIsOpen(!isOpen)}>
                  <HamburgerMenuIcon className="text-zinc-800 w-6 h-6" />
                </span>
              )}
            </button>
          </div>
          <div id="navbarNav ">
            <div
              className={`${isOpen ? "block mt-4 px-20" : "hidden lg:block "}`}
            >
              <ul className="list-none text-center gap-8 border rounded-lg border-indigo-500 p-4 flex flex-col lg:border-0 lg:p-0 lg:flex-row ">
                <li className="hover:text-indigo-500">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-indigo-500">
                  <a href="#">Features</a>
                </li>
                <li className="hover:text-indigo-500">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover:text-indigo-500">
                  <a>Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
