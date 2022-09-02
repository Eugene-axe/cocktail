import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllIngredients,
  getIngredientById,
  searchIngredientsByName,
} from "./ingredientsApi";

export const fetchIngredientsByName = createAsyncThunk(
  "ingredients/fetchIngredientsByName",
  async (name) => {
    const response = await searchIngredientsByName(name);
    return response;
  }
);

export const fetchIngredientById = createAsyncThunk(
  "ingredients/fetchIngredientById",
  async (id) => {
    const response = await getIngredientById(id);
    return response;
  }
);

export const fetchAllIngredients = createAsyncThunk(
  "ingredients/fetchAllIngredients",
  async () => {
    const response = await getAllIngredients();
    return response;
  }
);

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredient: {},
    ingredients: [],
    status: "idle",
  },
  extraReducers(build) {
    build
      .addCase(fetchIngredientsByName.fulfilled, (state, action) => {
        state.ingredient = action.payload[0];
      })
      .addCase(fetchIngredientById.fulfilled, (state, action) => {
        state.ingredient = action.payload[0];
      })
      .addCase(fetchAllIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
      });
  },
});

export default ingredientsSlice.reducer;

export const ingredients = (state) => state.ingredients.ingredients;
export const ingredient = (state) => state.ingredients.ingredient;
export const ingredientStatus = (state) => state.ingredients.status;
