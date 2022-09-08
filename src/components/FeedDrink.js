import React from "react";
import styled from "styled-components";
import {
  IconList,
  InnerLink,
  LineUnderTitle,
} from "../assets/styled/fragments";
import { Link } from "react-router-dom";
import { extractIngredientsAndMeasure } from "../utils";

const ItemDrink = ({ drink }) => {
  const ingredientsAndMeasure = extractIngredientsAndMeasure(drink);
  const extensibleDrink = { ...drink, ingredients: ingredientsAndMeasure };

  return (
    <ListItem>
      <Icon pathImg={extensibleDrink.strDrinkThumb} />
      <InfoBlock>
        <DrinkTitle>
          <Link to={`/drinks/${extensibleDrink.idDrink}`}>
            {extensibleDrink.strDrink}
          </Link>
        </DrinkTitle>
        <p>{extensibleDrink.strInstructions}</p>
        <Ingredients ingredients={extensibleDrink.ingredients} />
      </InfoBlock>
    </ListItem>
  );
};

const Ingredients = ({ ingredients }) => {
  return (
    <IngredientsList>
      {ingredients.map((item, i) => (
        <Chips key={item.ingredient + i}>{item.ingredient}</Chips>
      ))}
    </IngredientsList>
  );
};

export const FeedDrink = ({ drinks }) => {
  return (
    <>
      <List>
        {drinks.map((drink) => (
          <ItemDrink drink={drink} key={drink.idDrink} />
        ))}
      </List>
    </>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  & + & {
    border-top: 1px solid white;
  }
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.2rem;
  @media (min-width: 768px) {
    padding: 0.8rem 0.5rem;
  }
  @media (min-width: 992px) {
    padding: 1.2rem 1rem;
  }
`;

const Icon = styled.div`
  ${IconList}
  --one-side: calc(3vw + 3em);
  height: var(--one-side);
  width: var(--one-side);
  background-image: ${({ pathImg }) => `url(${pathImg}/preview)`};
  flex-shrink: 0;
  margin-right: 1rem;
  margin-left: 0;
`;

const InfoBlock = styled.section`
  flex: 1;
`;

const DrinkTitle = styled.h3`
  ${LineUnderTitle}
  ${InnerLink}
`;
const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  row-gap: 0.25rem;
`;

const Chips = styled.li`
  padding: 0.2rem 0.3rem;
  border-radius: 50px;
  background-color: #6f5cdf;
  margin-right: 0.5rem;
`;
