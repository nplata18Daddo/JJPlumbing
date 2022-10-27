import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const Layout = () => {
  return (
    <div>
      
      { <Navbar /> }
      <Outlet />
      { <Footer /> }
    </div>
  );
};
