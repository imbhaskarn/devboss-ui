import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineProfile } from "react-icons/ai";
import { SignInCard } from "./signInCard";
import { useDispatch } from "react-redux";
import { toggleLogin, toggleAuthState } from "@/store";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ImStatsBars2 } from "react-icons/im";
interface state {
  signIn: {
    showLogin: boolean;
  };
  auth: {
    isLoggedIn: boolean;
    user: {
      username: string;
      email: string;
    };
  };
}

import {
  FaAngleDown,
  FaHome,
  FaInfo,
  FaPenSquare,
  FaSearch,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileCard, setProfileCard] = useState(false);
  const showLogin = useSelector((state: state) => state.signIn.showLogin);
  const isLoggedIn = useSelector((state: state) => state.auth.isLoggedIn);
  const user = useSelector((state: state) => state.auth.user);
  const dispatch = useDispatch();

  const handleShowLogin = () => {
    dispatch(toggleLogin());
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    dispatch(toggleAuthState());
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-2 border-b border-gray-300">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-ubuntu ">
              Devboss
            </span>
          </Link>
          <div className="md:order-2 relative">
            {profileCard && (
              <AnimatePresence>
                <motion.div
                  key={"navbar-default"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, width: "0px" }}
                  transition={{
                    duration: 0.4,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  id="user-info"
                  className="absolute bg-white w-auto border border-gray-200  rounded-lg shadow-md top-10 right-[4px]"
                >
                  <ul
                    role="list"
                    className="flex flex-col justify-center gap-2 py-2"
                  >
                    <li>
                      <Link
                        className="hover:text-primary text-sm flex justify-start items-center gap-2 px-4"
                        href={`/user/${user.username}`}
                      >
                        <FaUser />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="hover:text-primary text-sm flex justify-start items-center gap-2 px-4">
                      <ImStatsBars2 />
                      <span>Stats</span>
                    </li>
                    <li
                      onClick={(params) => {
                        handleSignOut();
                        setProfileCard(!profileCard);
                      }}
                      className="text-sm border-t px-2 hover:text-primary"
                    >
                      <span>
                        Sign Out <br /> {user.email}
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </AnimatePresence>
            )}
            {isLoggedIn ? (
              <div
                onClick={() => {
                  setProfileCard(!profileCard);
                }}
                className="hidden text-gray-200 select-none text-sm rounded-lg  text-center cursor-pointer md:flex items-center relative"
              >
                <img
                  src={`https://ui-avatars.com/api/?background=a5b5e6&color=22223b&name=${user.username[0]}&rounded=true&bold=true&size=128`}
                  width={36}
                  height={36}
                  className="rounded-lg text-white"
                  alt={"avatar"}
                />
                <FaAngleDown size={12} className="text-secondary " />
              </div>
            ) : (
              <button
                onClick={handleShowLogin}
                type="button"
                className="text-white cursor-pointer  hidden md:block bg-primary px-[1rem] py-[0.6rem] font-medium rounded-lg text-sm  text-center hover:bg-opacity-90 hover:text-gray-100 md:mr-0"
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
              className="inline-flex items-center z-30  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {!menuOpen && <FiMenu size={30} className="text-secondary" />}
              {menuOpen && (
                <AiOutlineClose
                  size={30}
                  style={{ color: "black", fontWeight: "100" }}
                />
              )}
            </button>
          </div>
          <div
            className={`hidden md:relative  w-5/6  md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded  text-primary  md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/write"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-primary md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Write
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded   hover:text-primary md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:text-primary md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              {!isLoggedIn && (
                <li>
                  <button
                    onClick={handleShowLogin}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-primary md:p-0"
                  >
                    Sign In
                  </button>
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
                transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
                className="overflow-visible absolute z-20 inset-0 md:hidden shadow-md shadow-slate-300 bg-transparent"
                id="navbar-default"
              >
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="h-full w-full bg-gray-400 bg-opacity-10"
                >
                  <ul
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="font bg-gray-100 w-2/5 h-full flex flex-col text-left bg-opacity-100 py-10 px-4 gap-3 md:p-0 border   md:flex-row md:space-x-8 md:mt-0 md:border-0"
                  >
                    <li>
                      <Link
                        href="/"
                        className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaHome
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/write"
                        className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaPenSquare
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">Write</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 group"
                      >
                        <FaInfo
                          size={24}
                          className="text-gray-500 group-hover:text-gray-900"
                        />
                        <span className="ml-3">About</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 group"
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
                          <button className=" flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg group">
                            <FaSignOutAlt
                              size={24}
                              color={"white"}
                              className="text-gray-500 group-hover:text-gray-900"
                            />
                            <span>Sign Out</span>
                          </button>{" "}
                        </button>
                      </li>
                    ) : (
                      <li className="flex-grow flex justify-end flex-col">
                        <button
                          onClick={handleShowLogin}
                          className="inline-flex items-center gap-3 justify-center font-sans hover:bg-opacity-70 hover:text-gray-900 text-white bg-primary md:block px-[1.5rem] py-[1rem] rounded-lg  text-center"
                        >
                          <span>Sign In</span>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isLoggedIn && (
          <div>
            <Link href={`https://www.google.com`}>Google</Link>
          </div>
        )}
      </nav>
      {showLogin && <SignInCard />}
    </div>
  );
};

export default Navbar;
