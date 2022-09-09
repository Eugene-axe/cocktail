import React from "react";
import styled from "styled-components";
import { BorderWhite, LineUnderTitle } from "../assets/styled/fragments";

export const InformationBlock = (props) => {
  const { title, info, largeText, pathImg } = props;

  const renderListItemsInfo = (info) => {
    return info.map((obj) => (
      <ListInfoItem key={obj.key}>
        <InfoKey>{obj.key} : </InfoKey>
        <InfoValue>{obj.value}</InfoValue>
      </ListInfoItem>
    ));
  };

  return (
    <Container>
      <Icon pathImg={pathImg} />
      <Info>
        <Title>{title}</Title>
        <ListInfo>{renderListItemsInfo(info)}</ListInfo>
      </Info>
      <LargeText>{largeText}</LargeText>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  position: relative;
  column-gap: 1rem;
  grid-template-areas:
    "info"
    "icon"
    "largetext";
  padding: 1rem;

  @media (min-width: 330px) {
    grid-template-areas:
      "icon info"
      "largetext largetext";
    grid-auto-columns: minmax(15px, 300px) minmax(50%, 1fr);
  }
  @media (min-width: 660px) {
    grid-template-areas:
      "icon info"
      "icon largetext";
    grid-auto-columns: minmax(15px, 300px) minmax(40%, 1fr);
  }
`;

const Icon = styled.div`
  grid-area: icon;
  background: no-repeat center/cover;
  background-image: ${({ pathImg }) => `url('${pathImg}')`};
  min-height: 200px;
  height: 40vw;
  ${BorderWhite}
  border-radius: 0.5rem;
  @media (min-width: 330px) {
    height: 40vw;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const Info = styled.div`
  grid-area: info;
`;
const Title = styled.h2`
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

const LargeText = styled.p`
  grid-area: largetext;
`;
