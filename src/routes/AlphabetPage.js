import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockLink } from "../assets/styled/fragments";
import { ALPHABET } from "../const";

export const AlphabetPage = () => {
  const renderAlphabet = (alphabet) => {
    return alphabet.map((letter) => (
      <Item  key={letter}>
        <Link to={`/alphabet/${letter}`}>{letter}</Link>
      </Item>
    ));
  };
  return (
    <Container>{renderAlphabet(ALPHABET)}</Container>
  );
};

const Container = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: minmax(50px, 1fr);
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-auto-rows: minmax(70px, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-auto-rows: minmax(90px, 1fr);
    font-size: 1.3rem;
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);
    font-size: 2rem;
  }
`;

const Item = styled.li`
  ${BlockLink}
`;
