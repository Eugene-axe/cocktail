import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Block, LineUnderTitle } from "../assets/styled/fragments";
import { IngredientAdt } from "../components/IngredientAdt";
import {
  fetchAllIngredients,
  ingredients,
} from "../features/ingredients/ingredientsSlice";

const ItemList = ({ingredient}) => {
  return (
    <Item>
      <IngredientAdt ingredient={ingredient} /> 
    </Item>
  );
};

export const DrinkCreator = () => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(ingredients);

  useEffect(() => {
    if (!ingredientsList.length) {
      dispatch(fetchAllIngredients());
    }
  }, []);

  const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, i) => (
        <ItemList
          key={ingredient.strIngredient1 + i}
          ingredient={ingredient.strIngredient1}
        />
    ));
  };
  if (!ingredientsList.length) return <div>Loading ...</div>;

  return (
    <Container>
      <Greeting>
        <h2>Конструктор коктейля</h2>
        <p>
          Добавляте ингридиенты в правую часть, чтобы мы смогли подсказать что
          из этого может получиться{" "}
        </p>
      </Greeting>
      <CreatorContainer>
        <IngredientsList>{renderIngredients(ingredientsList)}</IngredientsList>
        <IngredientsList>
          <Item>5698</Item>
        </IngredientsList>
      </CreatorContainer>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const CreatorContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 2rem;
  max-width: 900px;
  justify-content: space-between;
  padding: 0 1rem;
`;

const IngredientsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${Block}
  flex: 1;
  height: calc(100vh - 100px - 100px - 50px);
  overflow: auto;
`;

const Item = styled.li`
  width: 40vw;
  max-width: 350px;
  outline: 1px solid #fff;
  padding: 0.25rem;
`;
