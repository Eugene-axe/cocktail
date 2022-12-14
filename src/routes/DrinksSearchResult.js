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
import { STATUS } from "../const";
import { Loader } from "../components/Loader";

export const DrinksSearchResult = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const drinksList = useSelector(drinks);
  const fetchStatus = useSelector(drinkStatus);
  useEffect(() => {
    dispatch(fetchDrinksByFirstLetter(params.letter));
  }, []);

  if (fetchStatus !== STATUS.SUCCEEDED) return <Loader />;

  return (
    <Container> {}
      <Header>{params.letter}</Header>
      {drinksList.length ? (
        <FeedDrink drinks={drinksList} />
      ) : (
        <h3>В базе ничего не найдено :(</h3>
      )}
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
