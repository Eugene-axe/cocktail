import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainNav = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="alpabet">Поиск по алфавиту</Link>
      </NavItem>
      <NavItem>
        <Link to="categories">Категории</Link>
      </NavItem>
      <NavItem>
        <Link to="ingredients">Ингридиенты</Link>
      </NavItem>
      <NavItem>
        <Link to="glasses">Glasses</Link>
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
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px 3px rgb(57 3 128);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    white-space: pre-line;
  }
`;
