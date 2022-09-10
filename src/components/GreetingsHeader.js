import React from "react";
import styled from "styled-components";

export const GreetingsHeader = () => {
  return (
    <Header>
      <h1 className="greeting__header">Liquid-Mix</h1>
      <h3>твой путеводитель в мире необычных напитков</h3>
      <p className="greeting_p">
        Этот портал станет твоим проводником на вечеринках. Победи бармена в
        количестве известных коктейлей. Удиви вторую половинку изготовив, что то
        изысканное из остатков в холодильнике. Воспользуйся функций
        “Конструктора” и узнай, что крепкий традиционный русский напиток, это
        потенциально 92 нетрадиционных напитка.
      </p>
    </Header>
  );
};

const Header = styled.header`
  grid-area: greeting;
  margin: 0 1rem;
  text-align: center;
  color: white;
  h1 {
    margin: 0.5rem;
    margin-bottom: 0;
  }
  h3 {
    margin: 0.15rem;
    line-height: 0.95;
  }
  p {
    font-size: 0.8rem;
  }
  @media (min-width: 992px) {
    h1 {
      margin: 0.625rem;
    }
    h3 {
      margin: initial;
      line-height: 1;
    }
    p {
      font-size: 1rem;
    }
  }
`;
