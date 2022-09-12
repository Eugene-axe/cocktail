import React from "react";
import styled from "styled-components";

import { FeedDrink } from "../components/FeedDrink";
import { useSelector } from "react-redux";
import { creatorDrinks } from "../features/drinks/drinksSlice";
import { Loader } from "../components/Loader";

export const CreatorResult = () => {
  const drinks = useSelector(creatorDrinks);

  if (!drinks.length) return <Loader />;

  return (
    <Container>
      <Header>Предложенные коктейли</Header>
      <FeedDrink drinks={drinks} />
    </Container>
  );
};

const Container = styled.article`
  padding: 1rem;
`;
const Header = styled.h2`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;
