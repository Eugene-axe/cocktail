import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LineUnderTitle } from "../assets/styled/fragments";
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

  if (!currentDrink.idDrink) return <div>Loadind ...</div>

  return (
    <Container>
      <DrinkPrevinfo>
        <Icon pathImg={extendedDrink.strDrinkThumb} />
        <div>
          <DrinkTitle>{extendedDrink.strDrink}</DrinkTitle>
          <ListInfo>{renderListItemsInfo(info)}</ListInfo>
        </div>
      </DrinkPrevinfo>
      <Instruction>{extendedDrink.strInstructions}</Instruction>
      <Recept>
        <ReceptTable IngredientsAndMeasure={extendedDrink.ingredients}/>
      </Recept>
    </Container>
  );
};

const Container = styled.article``;

const DrinkPrevinfo = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const Icon = styled.div`
  flex: 0 1 40vw;
  background: no-repeat center/cover;
  background-image: ${({ pathImg }) => `url('${pathImg}')`};
  height: 40vw;
  border: 1px solid #fff;
  border-radius: 0.5rem;
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
  padding: 1rem;
  ${LineUnderTitle}
`;

const Recept = styled.section`
  padding: 1rem 0;
`;
