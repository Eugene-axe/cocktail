import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav``;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.li`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const NavListItem = ({ path, title }) => {
  return (
    <ListItem>
      <Link to={path}>{title}</Link>
    </ListItem>
  );
};

export const NavigationApp = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem path="/" title="first" />
        <NavListItem path="/" title="second" />
        <NavListItem path="/" title="third" />
      </NavList>
    </Nav>
  );
};
