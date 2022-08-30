import React from "react";
import styled from "styled-components";

export const RecommendationBlock = () => {
  return (
    <Container>
      <Image>
        <Title>Lorem, ipsum.</Title>
      </Image>
      <IngredientList>
        {[0, 1, 2, 3, 4].map((item, i) => (
          <IngredientItem key={i}>
            <IngredientIcon
            // style="background-image : url('./1.jpg')"
            ></IngredientIcon>
            <IngredientItemTitle>Lorem, ipsum.1</IngredientItemTitle>
          </IngredientItem>
        ))}
      </IngredientList>
    </Container>
  );
};

const Container = styled.article`
  grid-area: recomended;
  overflow: hidden;
  width: 90%;
  margin: 1rem auto 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
`;

const Image = styled.div`
  background: no-repeat center/cover url("./recomended.jpg");
  flex: 1;
  height: 80vw;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  @media (min-width: 576px) {
    height: 60vh;
  }
`;
const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  text-shadow: 0px 0px 10px #00bcd4;
  font-size: calc(1rem + 1vw);
`;
const IngredientList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  margin: 0 0 0 0;
  padding: 0;
  overflow-x: auto;
  position: absolute;
  bottom: 0;
  @media (min-width: 768px) {
    position: static;
    flex-direction: column;
    margin-left: 1vw;
    flex: 0 1 20%;
  }
  @media (min-width: 992px) {
    flex: 0 1 40%;
    margin-left: 2rem;
  }
`;

const IngredientItem = styled.li`
  display: flex;
  font-size: 1.2rem;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  @media (min-width: 992px) {
    justify-content: flex-start;
    margin: 0.5rem;
  }
`;

const IngredientItemTitle = styled.span`
  display: none;
  margin-left: 1rem;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const IngredientIcon = styled.div`
  --one-side: calc(1.5vw + 1.5vh + 2.5em);
  padding: 0;
  margin: 0;
  height: var(--one-side);
  width: var(--one-side);
  background: no-repeat center/cover;
  flex-shrink: 0;
  border-radius: 100%;
  box-shadow: 0px 0px 10px #00bcd4;
  @media (min-width: 992px) {
    --one-side: calc(1.2vw + 1.2vh + 2em);
  }
`;
