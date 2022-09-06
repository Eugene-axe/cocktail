import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BlockLink, GridOfSquares } from "../assets/styled/fragments";
import { INGREDIENTS_SIZE, INGREDIENTS_URL, STATUS } from "../const";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllIngredients,
  fetchIngredientByName,
  ingredients,
  ingredientStatus,
} from "../features/ingredients/ingredientsSlice";
import { TooltipIngredients } from "../components/TootipIngredients";

const ItemList = ({ ingredient }) => {
  const dispatch = useDispatch();
  const status = useSelector(ingredientStatus)
  const [isHideTooltip, setIsHideTooltip] = useState(true);
  const [tooltipStartX, settooltipStartX] = useState(10);
  const [tooltipStartY, settooltipStartY] = useState(10);

  const toggleTooltip = (event, ingredient) => {
    if (!isHideTooltip) {
      setIsHideTooltip(true);
      return;
    }
    dispatch(fetchIngredientByName(ingredient));
    const xClick = event.clientX;
    const yClick = event.clientY;
    settooltipStartX(xClick);
    settooltipStartY(yClick);
    console.log(status);
    if (status === STATUS.SUCCEEDED) setIsHideTooltip(false);
  };
  const hideTooltip = (event) => {
    if (isHideTooltip) return;
    setTimeout(() => setIsHideTooltip(true), 300);
  };
  return (
    <Item
      pathImg={`${INGREDIENTS_URL}${ingredient.strIngredient1}${INGREDIENTS_SIZE.sm}`}
      onClick={(e) => toggleTooltip(e, ingredient.strIngredient1)}
      onMouseLeave={hideTooltip}
    >
      <span>{ingredient.strIngredient1}</span>
      {!isHideTooltip && (
        <TooltipIngredients
          xClick={tooltipStartX}
          yClick={tooltipStartY}
          name={ingredient.strIngredient1}
        />
      )}
    </Item>
  );
};

export const IngredientsList = () => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(ingredients);

  useEffect(() => {
    dispatch(fetchAllIngredients());
  }, []);

  const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, i) => (
      <ItemList ingredient={ingredient} key={ingredient.strIngredient1} />
    ));
  };

  if (!ingredientsList.length) return <div>Loading...</div>;

  return <Container>{renderIngredients(ingredientsList)}</Container>;
};

const Container = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  ${GridOfSquares}
  grid-template-columns: repeat(auto-fill , minmax(120px, 1fr));
  grid-auto-rows: minmax(120px, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: minmax(150px, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(200px, 1fr);
    font-size: 1.3rem;
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: minmax(240px, 1fr);
    font-size: 2rem;
  }
`;

const Item = styled.li`
  ${BlockLink}
  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 1rem;
    text-align: center;
  }
  background-position: top 25% left 50%;
  background-repeat: no-repeat;
  background-color: #5e52a9;
  background-image: ${({ pathImg }) => `url('${pathImg}')`};
  position: relative;
  @media (min-width: 992px) {
    background-position: top 50% left 50%;
  }
`;
