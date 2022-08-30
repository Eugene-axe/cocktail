import React from "react";
import styled from "styled-components";
import { GreetingsHeader } from "../components/GreetingsHeader";
import { MainNav } from "../components/MainNav";
import { RecommendationBlock } from "../components/RecommendationBlock";

const MainPage = () => {
  return (
    <Main>
      <GreetingsHeader />
      <MainNav />
      <RecommendationBlock />
    </Main>
  );
};

export default MainPage;

const Main = styled.main`
  background-color: darkslateblue;
  flex: 1;
  display: grid;
  color: #fff;
  grid-template-areas:
    "greeting"
    "navbuttons"
    "recomended";
  @media (min-width: 576px) {
    grid-template-areas:
      "navbuttons greeting"
      "navbuttons recomended";
  }
`;
