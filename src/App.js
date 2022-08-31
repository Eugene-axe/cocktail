import React from "react";
import styled from "styled-components";
import { LayoutApp } from "./components/LayoutApp";

function App() {
  return (
    <ContainerApp>
      <LayoutApp />
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
