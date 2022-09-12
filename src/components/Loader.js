import React from "react";
import styled from "styled-components";
import { BorderWhite } from "../assets/styled/fragments";

export const Loader = () => {
  return (
    <Container>
      <Spiner></Spiner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spiner = styled.div`
  width: 48px;
  height: 48px;
  ${BorderWhite}
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: crimson;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
