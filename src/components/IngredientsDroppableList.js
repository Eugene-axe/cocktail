import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Block } from "../assets/styled/fragments";
import { IngredientAdt } from "./IngredientAdt";

const ItemList = ({ ingredient, index }) => {
  return (
    <Draggable draggableId={ingredient} index={index}>
      {(provided, snapshot) => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDrag={snapshot.isDragging}
          ref={provided.innerRef}
        >
          <IngredientAdt ingredient={ingredient} />
        </Item>
      )}
    </Draggable>
  );
};

export const IngredientsDroppableList = ({ ingredientsList, id }) => {
  const renderIngredients = (ingredients) =>
    ingredients.map((ingredient, i) => (
      <ItemList key={ingredient} ingredient={ingredient} index={i} />
    ));
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <IngredientsList
          {...provided.droppableProps}
          isDragOver={snapshot.isDraggingOver}
          ref={provided.innerRef}
        >
          {renderIngredients(ingredientsList)}
          {provided.placeholder}
        </IngredientsList>
      )}
    </Droppable>
  );
};

const IngredientsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${Block}
  flex: 1;
  width: 40vw;
  max-width: 350px;
  height: calc(100vh - 100px - 100px - 80px);
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 50px;
  transition: all 0.1s linear;
  ${({ isDragOver }) => isDragOver && "box-shadow: 0px 0px 5px 6px #fff"};
  @media (min-width: 578px) {
    height: calc(100vh - 100px - 100px - 100px);
  }
`;

const Item = styled.li`
  width: 100%;
  outline: 1px solid #fff;
  padding: 0.25rem;
  background-color: ${({ isDrag }) =>
    isDrag ? "hsl(248, 25%, 25%)" : "darkslateblue"};
  border-radius: ${({ isDrag }) => (isDrag ? "0.5rem" : "0")};
  transition: all 0.1s linear;
`;
