import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";
import { LogoIcon } from "./LogoIcon";

export const HeaderApp = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const nav = useRef(null);
  const btnNav = useRef(null);
  const handleBtnClick = () => {
    console.log(isShowNav);
    setIsShowNav(!isShowNav);
    !isShowNav && nav.current.focus();
  };

  return (
    <Header>
      <ButtonMenu onClick={handleBtnClick} ref={btnNav}>
        &#9776;
      </ButtonMenu>
      <LogoContainer>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoContainer>
      <Search>
        <SearchInput placeholder="Search..." />
      </Search>
      <HeaderNav
        isShow={isShowNav}
        setIsShow={setIsShowNav}
        ref={nav}
        btn={btnNav.current}
      />
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
  position: relative;
  border-bottom: 1px solid #fff;
  z-index: 1;
  @media (min-width: 576px) {
    margin-bottom: 2rem;
  }
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
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 60px;
  @media (min-width: 576px) {
    width: 300px;
    height: 90px;
    z-index: 1;
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
