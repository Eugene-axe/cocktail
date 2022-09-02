import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BlockLink, GridOfSquares } from "../assets/styled/fragments";
import { INGREDIENTS_SIZE, INGREDIENTS_URL } from "../const";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllIngredients,
  fetchIngredientsByName,
  ingredients,
} from "../features/ingredients/ingredientsSlice";
import { TooltipIngredients } from "../components/TootipIngredients";

export const IngredientsList = () => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(ingredients);
  const [isHideTooltip, setIsHideTooltip] = useState(false);

  useEffect(() => {
    dispatch(fetchAllIngredients());
  }, []);

  const showTooltip = (event, ingredient) => {
    console.log(ingredient);
    dispatch(fetchIngredientsByName(ingredient));
  };

  const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, i) => (
      <Item
        key={ingredient.strIngredient1}
        pathImg={`${INGREDIENTS_URL}${ingredient.strIngredient1}${INGREDIENTS_SIZE.sm}`}
        onClick={(e) => showTooltip(e, ingredient.strIngredient1)}
      >
        {/* <Link to={`/ingredients/${ingredient.strIngredient1}`}>
          {ingredient.strIngredient1}
        </Link> */}
        <span>{ingredient.strIngredient1}</span>
        {i === 2 && !isHideTooltip && (
          <TooltipIngredients name={ingredient.strIngredient1} />
        )}
      </Item>
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
  a {
    align-items: flex-end;
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
