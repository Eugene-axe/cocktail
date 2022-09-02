import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LineUnderTitle } from "../assets/styled/fragments";
import { ingredient } from "../features/ingredients/ingredientsSlice";

export const TooltipIngredients = ({ name }) => {
  const currentIngredient = useSelector(ingredient);
  console.log(currentIngredient);
  if (!currentIngredient.idIngredient) return <div>downloading ...</div>;
  let currentDescription;

  if (
    currentIngredient.strDescription &&
    currentIngredient.strDescription.length > 80
  ) {
    currentDescription = currentIngredient.strDescription.slice(0, 80) + "...";
  } else {
    currentDescription = currentIngredient.strDescription;
  }

  return (
    <Container>
      <Title>{name}</Title>
      <List>
        <ItemType>{currentIngredient.strType || "Type"}</ItemType>
        <ItemAlcohol>{currentIngredient.strAlcohol || "Alcohol"}</ItemAlcohol>
        <ItemAbv>{currentIngredient.strABV || " - "}</ItemAbv>
        <ItemDescription>{currentDescription || "empty"}</ItemDescription>
      </List>
    </Container>
  );
};
const Container = styled.section`
  position: fixed;
  top: 10%;
  left: 20%;
  min-width: 150px;
  width: 40%;
  max-width: 300px;
  border-radius: 0.5rem;
  padding: 0 0.25rem 0.25rem;
  box-shadow: 0px 0px 1px 2px white;
  background: darkslateblue;
  color: white;
  z-index: 2;
`;

const Title = styled.h3`
  ${LineUnderTitle}
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0 1.5rem;
  margin: 0;
  font-style: italic;
  li:before {
    content: ".i.";
    margin-left: -2ch;
  }
`;

const ItemType = styled.li``;
const ItemAlcohol = styled.li``;
const ItemAbv = styled.li``;
const ItemDescription = styled.li``;
