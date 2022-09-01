import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FeedDrink } from "../components/FeedDrink";
import { useDispatch, useSelector } from "react-redux";
import {
  drinks,
  drinkStatus,
  fetchDrinksByFirstLetter,
} from "../features/drinks/drinksSlice";

export const DrinksSearchResult = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const drinksList = useSelector(drinks);
  const fetchStatus = useSelector(drinkStatus);
  useEffect(() => {
    if (fetchStatus === "idle")
      dispatch(fetchDrinksByFirstLetter(params.letter));
  });

  if (fetchStatus === "idle") return <div>Loadind ...</div>;

  return (
    <Container>
      <Header>{params.letter}</Header>
      <FeedDrink drinks={drinksList} />
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
