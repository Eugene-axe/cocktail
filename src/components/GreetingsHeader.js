import React from "react";
import styled from "styled-components";

export const GreetingsHeader = () => {
  return (
    <Header>
      <h1 className="greeting__header">Lorem, ipsum.</h1>
      <p className="greeting_p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        laudantium nobis debitis omnis. Aliquam laboriosam nesciunt dolore
        aperiam quasi numquam?
      </p>
    </Header>
  );
};

const Header = styled.header`
  grid-area: greeting;
  margin: 1rem;
  text-align: center;
  color: white;
`;
