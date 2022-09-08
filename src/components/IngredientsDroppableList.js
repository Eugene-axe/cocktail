import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Block } from "../assets/styled/fragments";
import { IngredientAdt } from "./IngredientAdt";

const ItemList = ({ ingredient, index }) => {
  return (
    <Draggable draggableId={ingredient} index={index}>
      {(provided) => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      <ItemList
        key={ingredient}
        ingredient={ingredient}
        index={i}
      />
    ));
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <IngredientsList {...provided.droppableProps} ref={provided.innerRef}>
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
  height: calc(100vh - 100px - 100px - 50px);
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 50px;
`;

const Item = styled.li`
  width: 100%;
  outline: 1px solid #fff;
  padding: 0.25rem;
  background-color: darkslateblue;
`;
