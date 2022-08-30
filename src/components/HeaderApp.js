import React from "react";
import styled from "styled-components";
import { NavigationApp } from "./NavigationApp";

const Header = styled.header`
  background: rgb(180, 58, 177);
  background: radial-gradient(
    circle,
    rgba(180, 58, 177, 1) 6%,
    rgba(174, 48, 127, 1) 28%,
    rgba(253, 29, 29, 1) 44%,
    rgba(205, 252, 69, 1) 67%,
    rgba(248, 252, 69, 1) 80%,
    rgba(252, 117, 69, 1) 96%
  );
  height: 100px;
`;

export const HeaderApp = () => {
  return (
    <Header>
      <h1>HEADERAPP</h1>
      <NavigationApp />
    </Header>
  );
};
