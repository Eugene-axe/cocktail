import React from "react";
import styled from "styled-components";

export const FooterApp = () => {
  return (
    <Footer>
      <p>Видел я тут что то</p>
    </Footer>
  );
};

const Footer = styled.footer`
  text-align: center;
  background-color: rgb(199, 199, 199);
  p {
    margin: 0;
    padding: 0.5rem;
  }
`;
