import React from "react";
import { Outlet } from "react-router-dom";
// import { Footer } from "./footer";
// import { NavBar } from "./navbvar";

export const Layout = () => {
  return (
    <div>
      <div> navbar</div>
      {/* <NavBar /> */}
      <Outlet />
      <div> footer</div>
      {/* <Footer /> */}
    </div>
  );
};
