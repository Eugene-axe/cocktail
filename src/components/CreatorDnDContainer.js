import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { IngredientsDroppableList } from "./IngredientsDroppableList";
import { useDispatch } from "react-redux";
import { fetchDrinksByManyIngredients } from "../features/drinks/drinksSlice";

export const CreatorDnDContainer = ({ ingredients }) => {
  const dispatch = useDispatch();
  const [outside, setOutside] = useState(
    ingredients.map((obj) => obj.strIngredient1)
  );
  const [inside, setInside] = useState([]);

  useEffect(() => {
    dispatch(fetchDrinksByManyIngredients(inside));
  }, [dispatch, inside]);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    let newInside;
    let newOutside;
    if (destination && source.droppableId !== destination.droppableId) {
      if (result.destination.droppableId === "inside") {
        newOutside = outside.filter((item) => item !== draggableId);
        newInside = [...inside];
        newInside.splice(destination.index, 0, draggableId);
      } else if (destination.droppableId === "outside") {
        newInside = inside.filter((item) => item !== draggableId);
        newOutside = [...outside];
        newOutside.splice(destination.index, 0, draggableId);
      }
      setOutside(newOutside);
      setInside(newInside);
    }
  };
  return (
    <CreatorContainer>
      <DragDropContext onDragEnd={handleDragEnd}>
        <IngredientsDroppableList ingredientsList={outside} id={"outside"} />
        <IngredientsDroppableList ingredientsList={inside} id={"inside"} />
      </DragDropContext>
    </CreatorContainer>
  );
};

const CreatorContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 2rem;
  max-width: 900px;
  justify-content: space-between;
  padding: 0 1rem;
`;
