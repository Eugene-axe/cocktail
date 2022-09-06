import React, { useLayoutEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockLink, LineUnderTitle } from "../assets/styled/fragments";
import { ingredient } from "../features/ingredients/ingredientsSlice";

export const TooltipIngredients = ({ xClick, yClick }) => {
  const tooltip = useRef(null);
  const currentIngredient = useSelector(ingredient);
  useLayoutEffect(() => {
    if (currentIngredient.idIngredient) setOpacity(1);
  }, [currentIngredient]);
  const [opacity, setOpacity] = useState(0);

  if (!currentIngredient.idIngredient) return <div></div>;

  let currentDescription;

  if (
    currentIngredient.strDescription &&
    currentIngredient.strDescription.length > 80
  ) {
    currentDescription = currentIngredient.strDescription.slice(0, 80) + "...";
  } else {
    currentDescription = currentIngredient.strDescription;
  }

  let x = xClick;
  let y = yClick;

  if (tooltip.current) {
    const tooltipWidth = tooltip.current.offsetWidth;
    const tooltipHeight = tooltip.current.offsetHeight;
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    if (x + tooltipWidth >= windowWidth) x = windowWidth - tooltipWidth - 10;
    if (y + tooltipHeight >= windowHeight)
      y = windowHeight - tooltipHeight - 10;
  }

  return (
    <Container x={x} y={y} opacity={opacity} ref={tooltip}>
      <Title>{currentIngredient.strIngredient}</Title>
      <List>
        <ItemType>{currentIngredient.strType || "Type"}</ItemType>
        <ItemAlcohol>{currentIngredient.strAlcohol || "Alcohol"}</ItemAlcohol>
        <ItemAbv>{currentIngredient.strABV || "0"}</ItemAbv>
        <ItemDescription>{currentDescription || "empty"}</ItemDescription>
      </List>
      <Button>
        <Link to={`/ingredients/${currentIngredient.strIngredient}`}>
          Подробнее
        </Link>
      </Button>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: ${({ y }) => y + "px"};
  left: ${({ x }) => x + "px"};
  min-width: 150px;
  width: 40vw;
  max-width: 300px;
  border-radius: 0.5rem;
  padding: 0 0.25rem 0.25rem;
  box-shadow: 0px 0px 1px 2px white;
  background: darkslateblue;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s ease;
  user-select: none;
`;

const Title = styled.h3`
  ${LineUnderTitle}
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0 0.5rem;
  margin: 0;
  font-style: italic;
  li:before {
    margin-left: 0;
    font-style: normal;
  }
`;

const ItemType = styled.li`
  &:before {
    content: "📦";
  }
`;
const ItemAlcohol = styled.li`
  &:before {
    content: "🔞";
  }
`;
const ItemAbv = styled.li`
  &:before {
    content: "🥴";
  }
  &:after {
    content: " °";
  }
`;
const ItemDescription = styled.li`
  &:before {
    content: "📝";
  }
`;

const Button = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  ${BlockLink}
  display: inline-block;
  align-self: center;
  padding: 0.1rem 0.5rem;
  font-size: 0.5rem;
`;
