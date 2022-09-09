import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InnerLink } from "../assets/styled/fragments";
import { INGREDIENTS_SIZE, INGREDIENTS_URL } from "../const";

const Row = ({ IngAndMeas }) => {
  const [isChecked, setIsChecked] = useState();
  return (
    <TRow isChecked={isChecked}>
      <TdPicture
        pathImg={INGREDIENTS_URL + IngAndMeas.ingredient + INGREDIENTS_SIZE.sm}
      />
      <TdTitle>
        <Link to={`/ingredients/${IngAndMeas.ingredient}`}>
          {IngAndMeas.ingredient}
        </Link>
      </TdTitle>
      <TdMeasure>{IngAndMeas.measure}</TdMeasure>
      <TdCheck>
        <input
          type="checkbox"
          value={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </TdCheck>
    </TRow>
  );
};

export const ReceptTable = ({ IngredientsAndMeasure }) => {
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
          <Row IngAndMeas={IngAndMeas} key={IngAndMeas.ingredient} />
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  td {
    text-align: center;
    padding: 0.2rem 0;
  }
`;

const TdPicture = styled.td`
  --td-side: 50px;
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
const TdTitle = styled.td`
  ${InnerLink}
  text-decoration: underline;
`;
const TdCheck = styled.td``;

const TRow = styled.tr`
  background: ${({ isChecked }) =>
    isChecked &&
    `linear-gradient(
    111deg,
    transparent -14%,
    #11a63554 38%,
    transparent 121%
  )`};
`;
