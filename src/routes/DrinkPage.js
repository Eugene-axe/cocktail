import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BorderWhite, LineUnderTitle } from "../assets/styled/fragments";
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
  const renderListItemsInfo = (info) => {
    return info.map((obj) => (
      <ListInfoItem key={obj.key}>
        <InfoKey>{obj.key} :</InfoKey>
        <InfoValue>{obj.value}</InfoValue>
      </ListInfoItem>
    ));
  };

  if (!currentDrink.idDrink) return <div>Loadind ...</div>;

  return (
    <Container>
      <DrinkPrevinfo>
        <Icon pathImg={extendedDrink.strDrinkThumb} />
        <DrinkInfo>
          <DrinkTitle>{extendedDrink.strDrink}</DrinkTitle>
          <ListInfo>{renderListItemsInfo(info)}</ListInfo>
        </DrinkInfo>
        <Instruction>{extendedDrink.strInstructions}</Instruction>
      </DrinkPrevinfo>
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

const DrinkPrevinfo = styled.section`
  flex: 1 0 50%;
  display: grid;
  position: relative;
  column-gap: 1rem;
  grid-template-areas:
    "info"
    "icon"
    "instruction";
  padding: 1rem;
  &:after {
    content: "";
    border: 1px solid #6f5cdf;
    width: 90%;
    position: absolute;
    bottom: 0;
    left: 5%;
    @media (min-width: 992px) {
      bottom: initial;
      left: initial;
      top: 5%;
      right: 0;
      height: 90%;
      width: 0%;
    }
  }
  @media (min-width: 330px) {
    grid-template-areas:
      "icon info"
      "instruction instruction";
    grid-auto-columns: minmax(15px, 300px) minmax(50%, 1fr);
  }
  @media (min-width: 660px) {
    grid-template-areas:
      "icon info"
      "icon instruction";
    grid-auto-columns: minmax(15px, 300px) minmax(40%, 1fr);
  }
`;

const Icon = styled.div`
  grid-area: icon;
  background: no-repeat center/cover;
  background-image: ${({ pathImg }) => `url('${pathImg}')`};
  height: 40vw;
  ${BorderWhite}
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const DrinkInfo = styled.div`
  grid-area: info;
`;
const DrinkTitle = styled.h2`
  ${LineUnderTitle}
`;

const ListInfo = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListInfoItem = styled.li`
  line-height: 2;
`;

const InfoKey = styled.span`
  font-style: italic;
`;
const InfoValue = styled.span``;

const Instruction = styled.p`
  grid-area: instruction;
`;

const Recept = styled.section`
  flex: 1 0 50%;
  padding: 1rem 0;
`;
