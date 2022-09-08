import { css } from "styled-components";

export const BorderWhite = css`
  box-shadow: 0px 0px 1px 3px #fff;
`;

export const Block = css`
  border-radius: 0.5rem;
  ${BorderWhite}
  user-select: none;
`;

export const BlockLink = css`
  ${Block}
  a, span {
    height: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    white-space: pre-line;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const InnerLink = css`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const LineUnderTitle = css`
  position: relative;
  display: inline-block;
  margin: 0;
  &:after {
    content: "";
    border: 1px solid #6f5cdf;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const GridOfSquares = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: minmax(50px, 1fr);
  gap: 1rem;
`;

export const backgroundIcon = css`
  background: no-repeat center / cover;
`;

export const IconList = css`
  ${BorderWhite};
  border-radius: 500px;
  background: no-repeat center/cover #6b4dd8;
  padding: 0;
  margin: 0;
`;
