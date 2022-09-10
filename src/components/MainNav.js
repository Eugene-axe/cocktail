import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockLink } from "../assets/styled/fragments";

export const MainNav = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/alphabet">Поиск по алфавиту</Link>
      </NavItem>
      <NavItem>
        <Link to="categories">Категории</Link>
      </NavItem>
      <NavItem>
        <Link to="/ingredients">Ингредиенты</Link>
      </NavItem>
      <NavItem>
        <Link to="/creator">Конструктор</Link>
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  grid-area: navbuttons;
  width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(15vh, 1fr);
  gap: 1rem;
  max-height: 80vh;
  @media (min-width: 576px) {
    grid-template-columns: minmax(200px, 1fr);
    grid-auto-rows: minmax(15vh, 1fr);
  }
`;

const NavItem = styled.div`
  ${BlockLink}
`;
