import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { InnerLink } from "../assets/styled/fragments";

export const HeaderNav = React.forwardRef(({ isShow, setIsShow, btn }, ref) => {
  return (
    <Container
      tabIndex="0"
      isShow={isShow}
      onBlur={(event) => {
        if (event.relatedTarget === btn) return;
        setIsShow(false);
      }}
      ref={ref}
    >
      <NavList>
        <ListItem className="header__navigation__item">
          <NavLink to="/">Главная</NavLink>
        </ListItem>
        <ListItem className="header__navigation__item">
          <NavLink to="/alphabet">Алфавит</NavLink>
        </ListItem>
        <ListItem className="header__navigation__item">
          <NavLink to="/ingredients">Ингридиенты</NavLink>
        </ListItem>
        <ListItem className="header__navigation__item">
          <NavLink to="/creator">Конструктор</NavLink>
        </ListItem>
      </NavList>
    </Container>
  );
});

const Container = styled.section`
  position: absolute;
  top: 100%;
  left: ${({ isShow }) => (isShow ? 0 : "-80vw")};
  transition: all 0.3s ease;
  @media (min-width: 576px) {
    top: 83%;
    right: 0;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  background-color: crimson;
  margin: 0;
  padding: 0;
  border-bottom-right-radius: 0.5rem;
  overflow: hidden;
  color: white;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 50vw;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    border-radius: 0;
    border-right: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  transition: all 0.2s ease;
  ${InnerLink}
  @media(min-width: 992px) {
    font-size: 1.2rem;
  }
  a {
    flex: 1;
    padding: 0.5rem 1.5rem;
    &:hover {
      background-color: hsl(348deg 83% 40%);
    }
  }
`;
