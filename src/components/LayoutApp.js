import React from "react";
import { Outlet } from "react-router-dom";
import { FooterApp } from "./FooterApp";
import { HeaderApp } from "./HeaderApp";

export const LayoutApp = () => {
  return (
    <>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </>
  );
};


