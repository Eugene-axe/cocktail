import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { FooterApp } from "./FooterApp";
import { HeaderApp } from "./HeaderApp";

export const LayoutApp = () => {
  return (
    <>
      <HeaderApp />
      <Main>
        <Outlet />
      </Main>
      <FooterApp />
    </>
  );
};

const Main = styled.main`
  background-color: darkslateblue;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;
