import React from "react";
import styled from "styled-components";
import { LogoFooter } from "./LogoFooter";

export const FooterApp = () => {
  return (
    <Container>
      <Contacts>
        <p>
          2022 <a href="https://github.com/Eugene-axe">Мой профиль на Github</a>
        </p>
        <p>Стажировка frontend IT-Lad</p>
      </Contacts>
      <Logo>
        <LogoFooter width={90} height={40} />
      </Logo>
      <Support>
        <h4>Помогли: </h4>
        <p>
          API : <a href="https://www.thecocktaildb.com/">TheCocktailDB</a>
        </p>
        <p>
          Logo : <a href="https://www.renderforest.com/logo-maker">Renderforest</a>
        </p>
      </Support>
    </Container>
  );
};

const Container = styled.footer`
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 0.5rem;
  background-color: hsl(225, 2%, 90%);
  color: hsl(225, 2%, 50%);
  @media (min-width: 576px) {
    font-size: 0.65rem;
    padding: 0.25rem 1.5rem;
  }
  @media (min-width: 992px) {
    font-size: 0.8rem;
    padding: 0.25rem 3rem;
  }
  a {
    color: inherit;
  }
  p,
  h4 {
    margin: 0;
    padding: 0;
  }
`;

const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  justify-content: space-around;
  align-items: flex-end;
`;

const Logo = styled.section`
  width: 100px;
  height: 30px;
  overflow: hidden;
  max-width: 30vw;
  @media (min-width: 992px) {
    width: 150px;
    height: 50px;
  }
`;

const Support = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  justify-content: space-around;
  align-items: flex-start;
`;
