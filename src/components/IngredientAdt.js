import React from "react";
import styled from "styled-components";
import { IconList } from "../assets/styled/fragments";
import { INGREDIENTS_SIZE, INGREDIENTS_URL } from "../const";

export const IngredientAdt = ({ ingredient }) => {
  return (
    <ItemContainer>
      <IngredientIcon
        pathImg={`${INGREDIENTS_URL}${ingredient}${INGREDIENTS_SIZE.sm}`}
      ></IngredientIcon>
      <IngredientItemTitle>{ingredient}</IngredientItemTitle>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  column-gap: 1em;
  font-size: 0.7rem;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const IngredientItemTitle = styled.span``;

const IngredientIcon = styled.div`
  ${IconList}
  --one-side: calc(1.5vw + 1.5vh + 1.5rem);
  height: var(--one-side);
  width: var(--one-side);
  background-image: ${({ pathImg }) => `url("${pathImg}")`};

  @media (min-width: 992px) {
    --one-side: calc(1.2vw + 1.2vh + 2em);
  }
`;
