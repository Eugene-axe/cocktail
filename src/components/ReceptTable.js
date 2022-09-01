import React from "react";
import styled from "styled-components";
import { INGREDIENTS_SIZE, INGREDIENTS_URL } from "../const";

export const ReceptTable = ({ IngredientsAndMeasure }) => {
  console.log(IngredientsAndMeasure);
  return (
    <Table>
      <caption>Recept</caption>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Title</th>
          <th>Measure</th>
          <th>Check</th>
        </tr>
        {IngredientsAndMeasure.map((IngAndMeas) => (
          <tr key={IngAndMeas.ingredient}>
            <TdPicture
              pathImg={
                INGREDIENTS_URL + IngAndMeas.ingredient + INGREDIENTS_SIZE.sm
              }
            />
            <TdTitle>{IngAndMeas.ingredient}</TdTitle>
            <TdMeasure>{IngAndMeas.measure}</TdMeasure>
            <TdCheck>
              <input type="checkbox" />
            </TdCheck>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  td {
    text-align: center;
    padding: 0.2rem 0;
  }
`;

const TdPicture = styled.td`
  --td-side: 15vw;
  border-radius: 0.5rem;
  height: var(--td-side);
  width: var(--td-side);
  background: no-repeat center/cover;
  background-image: ${({ pathImg }) => `url('${pathImg}')`};
  box-sizing: border-box;
  background-clip: padding-box;
  border: 3px solid transparent;
`;

const TdMeasure = styled.td``;
const TdTitle = styled.td``;
const TdCheck = styled.td``;
