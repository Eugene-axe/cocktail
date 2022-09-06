import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  ingredient,
  fetchIngredientByName,
} from "../features/ingredients/ingredientsSlice";
import { INGREDIENTS_URL, INGREDIENTS_SIZE } from "../const";
import { InformationBlock } from "../components/InformationBlock";

export const IngredientPage = () => {
  const { ingredientName } = useParams();
  const dispatch = useDispatch();
  const currentIngredient = useSelector(ingredient);

  useEffect(() => {
    dispatch(fetchIngredientByName(ingredientName));
  }, []);

  const info = [
    { key: "Type", value: currentIngredient.strType },
    { key: "Alcohol", value: currentIngredient.strAlcohol },
    { key: "ABV", value: currentIngredient.strABV || 0 },
  ];


  if (!currentIngredient.idIngredient) return <div>Loadind ...</div>;
  const pathImg = `${INGREDIENTS_URL}${currentIngredient.strIngredient}${INGREDIENTS_SIZE.lg}`;
  return (
    <Container>
      <InformationBlock
        title={currentIngredient.strIngredient}
        info={info}
        largeText={currentIngredient.strDescription}
        pathImg={pathImg}
      />
    </Container>
  );
};

const Container = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

