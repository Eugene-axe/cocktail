import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BlockLink, LineUnderTitle } from "../assets/styled/fragments";
import {
  fetchAllIngredients,
  ingredients,
} from "../features/ingredients/ingredientsSlice";
import { STATUS } from "../const";
import { CreatorDnDContainer } from "../components/CreatorDnDContainer";
import {
  creatorDrinks,
  creatorStatus,
  fetchDrinksByManyIngredients,
} from "../features/drinks/drinksSlice";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";

export const DrinkCreator = () => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(ingredients);
  const drinks = useSelector(creatorDrinks);
  const statusDrinks = useSelector(creatorStatus);

  useEffect(() => {
    dispatch(fetchAllIngredients());
    dispatch(fetchDrinksByManyIngredients([]));
  }, []);

  if (!ingredientsList.length) return <Loader />;

  return (
    <Container>
      <Greeting>
        <h2>Конструктор коктейля</h2>
        <p>
          Перетаскивайте ингредиенты в правую часть, чтобы мы могли подсказать,
          что из этого может получиться
        </p>
      </Greeting>
      <CreatorDnDContainer ingredients={ingredientsList} />
      {statusDrinks === STATUS.SUCCEEDED && (
        <Button>
          {drinks.length ? (
            <Link to="/creator-result">
              Можем создать {drinks.length} напитков{" "}
            </Link>
          ) : (
            <span>Можем создать {drinks.length} напитков</span>
          )}
        </Button>
      )}
    </Container>
  );
};

const Container = styled.article`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Greeting = styled.section`
  text-align: center;
  h1,
  h2,
  h3,
  h4 {
    ${LineUnderTitle}
  }
`;

const Button = styled.div`
  ${BlockLink}
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background: darkslateblue;
  font-size: 0.7rem;
  box-shadow: 0px 0px 1px 2px #fff;
`;
