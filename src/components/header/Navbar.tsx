import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { SignInCard } from "./signInCard";
import { useDispatch } from "react-redux";
import { toggleLogin } from "@/store";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const showLogin = useSelector((state: any) => state.signIn.showLogin);
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const handleShowLogin = () => {
    console.log("clicked");
    dispatch(toggleLogin());
  };
  console.log(showLogin);
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Devboss
            </span>
          </Link>
          <div className="flex md:order-2">
            {user ? (
              <div className="hidden md:block text-gray-200 text-lg rounded-full hover:ring-blue text-center">
                <img
                  src={`https://ui-avatars.com/api/?background=a5b5e6&color=22223b&name=${user.username}&rounded=true&bold=true&size=128`}
                  width={42}
                  height={42}
                  className="rounded-full"
                  alt={"avatar"}
                />
              </div>
            ) : (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center  w-10 h-10 z-20 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              
              {!menuOpen && <FiMenu size={30} style={{ color: "white" }} />}
              {menuOpen && <TfiClose size={30} style={{ color: "white" }} />}
            </button>
          </div>
          <div
            className={`hidden md:relative w-5/6  md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 text-lg rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Write
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              {!user && (
                <li>
                  <Link
                    onClick={handleShowLogin}
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                transition={{ duration: 0.2, type: "tween", ease: "easeOut" }}
                className="overflow-visible absolute inset-0 md:hidden bg-gray-400 dark:bg-gray-200 shadow-md shadow-slate-950"
                id="navbar-default"
              >
                <ul className="font w-3/5 h-full flex flex-col text-left py-10 p-10 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 text-lg rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Write
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </Link>
                  </li>
                  {!user && (
                    <li>
                      <Link
                        onClick={handleShowLogin}
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Sign In
                      </Link>
                    </li>
                  )}
                </ul>
              </motion.div>
            )}{" "}
          </AnimatePresence>
        </div>
      </nav>
      {showLogin && <SignInCard />}
    </div>
  );
};

export default Navbar;
