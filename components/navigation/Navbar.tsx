"use client";

import React, { useState } from "react";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  DiscordLogoIcon,
  ArrowRightIcon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <nav className="w-full">
        <div className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl  md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center items-center">
            <div className="text-2xl font-semibold font-sans">logo</div>
            <div className="hidden md:flex">
              <ul className="flex items-center justify-start">
                <li>
                  <a href="#" className="mx-2"></a>
                  Home
                </li>
                <li>
                  <a href="#" className="mx-2"></a>
                  Services
                </li>
                <li>
                  <a href="#" className="mx-2"></a>
                  Contact
                </li>
                <li>
                  <a href="#" className="mx-2"></a>
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <ul className="flex items-center justify-between text-inherit gap-4">
              <li className="">
                {" "}
                <MagnifyingGlassIcon
                  width={20}
                  height={20}
                  className="text-indigo-600"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />{" "}
              </li>
              <li className="hidden md:block">
                {" "}
                <DiscordLogoIcon
                  width={20}
                  height={20}
                  className="text-indigo-600"
                />{" "}
              </li>
              <li className="">
                {" "}
                <SunIcon
                  width={24}
                  height={24}
                  className="text-indigo-600"
                />{" "}
              </li>
            </ul>

            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                className="bg-indigo-600 text-zinc-100 hover:bg-indigo-500 hover:text-zinc-200 flex items-center justify-center gap-2 md:gap-0"
              >
                <span>Sign in </span>{" "}
                <span>
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Button>

              <span className="md:hidden">
                <HamburgerMenuIcon
                  width={20}
                  height={20}
                  className="text-indigo-600"
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <div
          className="absolute z-50 w-full top-0 bottom-0 bg-zinc-900 bg-opacity-50 flex justify-center items-start pt-20"
          style={{ height: "100vh" }}
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white p-4 rounded-lg w-5/6 min-h-40 lg:min-h-60 lg:w-2/5 lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <form>
              <div className="flex border rounded-lg p-2 pl-4 justify-between items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none"
                />
                <button>
                  <MagnifyingGlassIcon width={20} height={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
