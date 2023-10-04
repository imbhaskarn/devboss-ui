import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state: any) => state.auth.isloggedIn);
  return (
    <div>
      <Navbar />
      {!user && <Hero />}
    </div>
  );
};
export default Header;
