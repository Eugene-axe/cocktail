import { css } from "styled-components";

export const BlockLink = css`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px 3px rgb(57 3 128);
  a {
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
