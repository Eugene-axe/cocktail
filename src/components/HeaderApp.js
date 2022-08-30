import React from "react";
import styled from "styled-components";
import { LogoIcon } from "./LogoIcon";

export const HeaderApp = () => {
  return (
    <Header>
      <ButtonMenu>&#9776;</ButtonMenu>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      <Search>
        <SearchInput placeholder="Search..." />
      </Search>
    </Header>
  );
};

const Header = styled.header`
  flex: 0 0 80px;
  padding: 0.25rem 0.5rem;
  background-color: crimson;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  overflow: hidden;
`;

const ButtonMenu = styled.button`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background-color: crimson;
  color: #fff;
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 3px #f9b8b8;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 60px;
  @media (min-width: 576px) {
    width: 300px;
    height: 80px;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 100px;
  }
`;

const Search = styled.div`
  flex: 0 1 50%;
  margin-left: auto;
  @media (min-width: 992px) {
    flex-basis: 30%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 3px #f9b8b8;
  font-size: 1.3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
  &:focus {
    --offsetX: -15vw;
    transform: translateX(var(--offsetX));
    width: calc(100% - var(--offsetX));
  }
`;
