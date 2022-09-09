import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockLink } from "../assets/styled/fragments";

export const NotFound = () => {
  return (
    <Container>
      <Header>Страница не найдена или находится в разработке</Header>
      <Image />
      <P>
        Возможно наш фронтенд-разработчик прямо сейчас старается выгрузить эту
        страницу на сайт. Дайте ему немного времени и возвращайтесь
      </P>
      <Button>
        <Link to="/">на главную</Link>
      </Button>
    </Container>
  );
};

const Container = styled.article`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h2`
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const Image = styled.div`
  background: no-repeat center/contain url("./not_found.png");
  height: 30vh;
  width: 50vw;
`;
const P = styled.p`
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.div`
  ${BlockLink}
  padding: 0.25rem 0.5rem;
  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
`;
