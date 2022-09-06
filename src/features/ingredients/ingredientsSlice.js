import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../const";
import {
  getAllIngredients,
  getIngredientById,
  searchIngredientsByName,
} from "./ingredientsApi";

export const fetchIngredientByName = createAsyncThunk(
  "ingredients/fetchIngredientByName",
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
      .addCase(fetchIngredientByName.pending, (state, action)=> {
        state.status = STATUS.PENDING;
      })
      .addCase(fetchIngredientByName.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.ingredient = action.payload[0];
      })
      .addCase(fetchIngredientById.pending, (state, action)=> {
        state.status = STATUS.PENDING;
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
