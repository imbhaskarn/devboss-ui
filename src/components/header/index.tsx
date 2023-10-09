import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useSelector } from "react-redux";

const Header = () => {
  // const isLoggedIn = useSelector((state: any) => state.auth.isloggedIn);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <div>
      <Navbar />
      {!isLoggedIn && <Hero />}
    </div>
  );
};
export default Header;
