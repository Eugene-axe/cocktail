import React from "react";
import styled from "styled-components";
import { FeedDrink } from "../components/FeedDrink";
import { useSelector } from "react-redux";
import { searchDrinks, searchStatus } from "../features/drinks/drinksSlice";
import { STATUS } from "../const";
import { Loader } from "../components/Loader";

export const SearchResult = () => {
  const drinksList = useSelector(searchDrinks);
  const fetchStatus = useSelector(searchStatus);

  if (fetchStatus !== STATUS.SUCCEEDED) return <Loader />;

  return (
    <Container>
      {" "}
      {}
      <Header>Результаты поиска</Header>
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
