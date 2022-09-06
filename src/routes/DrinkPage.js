import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { InformationBlock } from "../components/InformationBlock";
import { ReceptTable } from "../components/ReceptTable";
import { drink, fetchDrinkById } from "../features/drinks/drinksSlice";
import { extractIngredientsAndMeasure } from "../utils";

export const DrinkPage = () => {
  const { idDrink } = useParams();
  const dispatch = useDispatch();
  const currentDrink = useSelector(drink);
  const extendedDrink = {
    ...currentDrink,
    ingredients: extractIngredientsAndMeasure(currentDrink),
  };

  useEffect(() => {
    dispatch(fetchDrinkById(idDrink));
  }, []);

  const info = [
    { key: "Category", value: extendedDrink.strCategory },
    { key: "Alcoholic", value: extendedDrink.strAlcoholic },
    { key: "Glass", value: extendedDrink.strGlass },
  ];

  if (!currentDrink.idDrink) return <div>Loadind ...</div>;

  return (
    <Container>
      <MainInformation
        title={extendedDrink.strDrink}
        info={info}
        largeText={extendedDrink.strInstructions}
        pathImg={extendedDrink.strDrinkThumb}
      />
      <Recept>
        <ReceptTable IngredientsAndMeasure={extendedDrink.ingredients} />
      </Recept>
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

const MainInformation = styled(InformationBlock)`
  flex: 1 0 50%;
`;

const Recept = styled.section`
  flex: 1 0 50%;
  padding: 1rem;
  position: relative;
  &::before {
    content: "";
    border: 1px solid #6f5cdf;
    width: 90%;
    position: absolute;
    top: 0;
    left: 5%;
    @media(min-width: 992px ) {
      width: inherit;
      top: 5%;
      left: 0;
      height: 90%;
    }
  }
`;
