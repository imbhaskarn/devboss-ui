import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { SignInCard } from "./signInCard";
import { useDispatch } from "react-redux";
import { toggleLogin, setLoginStatus } from "@/store";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
interface state {
  signIn: {
    showLogin: boolean;
  };
  auth: {
    isLoggedIn: boolean;
    user: {
      username: string;
    };
  };
}

import {
  FaHome,
  FaInfo,
  FaPenSquare,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const showLogin = useSelector((state: state) => state.signIn.showLogin);
  const isLoggedIn = useSelector((state: state) => state.auth.isLoggedIn);
  const user = useSelector((state: state) => state.auth.user);
  const dispatch = useDispatch();

  const handleShowLogin = () => {
    dispatch(toggleLogin());
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    dispatch(setLoginStatus(false));
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Devboss
            </span>
          </Link>
          <div onClick={handleShowLogin} className="flex md:order-2">
            {isLoggedIn ? (
              <div className="hidden md:block text-gray-200 text-lg rounded-full hover:ring-blue text-center">
                <img
                  src={`https://ui-avatars.com/api/?background=a5b5e6&color=22223b&name=${user?.username}&rounded=true&bold=true&size=128`}
                  width={42}
                  height={42}
                  className="rounded-full"
                  alt={"avatar"}
                />
              </div>
            ) : (
              <button
                type="button"
                className="text-white hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                Get started
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center z-30  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {!menuOpen && <FiMenu size={30} style={{ color: "white" }} />}
              {menuOpen && (
                <AiOutlineClose
                  size={30}
                  style={{ color: "black", fontWeight: "100" }}
                />
              )}
            </button>
          </div>
          <div
            className={`hidden md:relative  w-5/6 z-50  md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 text-lg rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Write
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link
                    onClick={handleShowLogin}
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key={"navbar-default"}
                initial={{ opacity: 0, left: "-100%" }}
                animate={{ opacity: 1, left: "0%" }}
                exit={{ opacity: 0, left: "-100%" }}
                transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
                className="overflow-visible absolute z-20 inset-0 md:hidden shadow-md shadow-slate-300 bg-transparent"
                id="navbar-default"
              >
                <div className="h-full w-full bg-slate-200 bg-opacity-20">
                  <ul className="font w-4/6 h-full flex flex-col text-left bg-opacity-100 py-10 p-10 gap-3 md:p-0 border border-gray-100 bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-lg text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaHome
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-lg text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaPenSquare
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">Write</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-lg text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaInfo
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">About</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-lg text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaSearch
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">Search</span>
                      </a>
                    </li>
                    {isLoggedIn ? (
                      <li
                        onClick={handleSignOut}
                        className="flex-grow flex justify-end flex-col"
                      >
                        <button className="inline-flex items-center justify-center font-sans font-semibold tracking-wide text-white bg-blue-700 rounded-lg h-[48px]">
                          <a
                            href="#"
                            className=" flex items-center p-2 text-lg font-normal text-gray-900 rounded-lg group"
                          >
                            <FaSignOutAlt
                              size={24}
                              color={"white"}
                              className="text-gray-500 group-hover:text-gray-900"
                            />
                            <span className="ml-3">Sign Out</span>
                          </a>{" "}
                        </button>
                      </li>
                    ) : (
                      <li className="flex-grow flex justify-end flex-col">
                        <button className="inline-flex items-center justify-center font-sans font-semibold tracking-wide text-white bg-blue-700 rounded-lg h-[48px]">
                          <a
                            href="#"
                            className=" flex items-center p-2 text-lg font-normal text-gray-900 rounded-lg group"
                          >
                            <FaSignInAlt
                              size={24}
                              color={"white"}
                              className="text-gray-500 group-hover:text-gray-900"
                            />
                            <span className="ml-3">Sign In</span>
                          </a>{" "}
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {showLogin && <SignInCard />}
    </div>
  );
};

export default Navbar;
