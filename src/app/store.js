import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import drinksReducer from "../features/drinks/drinksSlice";
import ingredientsReducer from "../features/ingredients/ingredientsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drinks: drinksReducer,
    ingredients: ingredientsReducer,
  },
});
