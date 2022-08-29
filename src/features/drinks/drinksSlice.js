import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDrinkById,
  getDrinksByFirstLetter,
  getDrinksByName,
  getRandomDrink,
} from "./drinksAPI";

export const fetchDrinksByName = createAsyncThunk(
  "drinks/fetchDrinksByName",
  async (name) => {
    const response = await getDrinksByName(name);
    return response;
  }
);

export const fetchDrinksByFirstLetter = createAsyncThunk(
  "drinks/fetchDrinksByFirstLetter",
  async (letter) => {
    const response = await getDrinksByFirstLetter(letter);
    return response;
  }
);

export const fetchDrinkById = createAsyncThunk(
  "drinks/fetchDrinkById",
  async (id) => {
    const response = await getDrinkById(id);
    return response;
  }
);

export const fetchRandomDrink = createAsyncThunk(
  "drinks/fetchRandomDrink",
  async (id) => {
    const response = await getRandomDrink();
    return response;
  }
);

const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    drinks: [],
    drink: {},
    status: "idle",
  },
  extraReducers(build) {
    build
      .addCase(fetchDrinksByName.fulfilled, (state, action) => {
        state.drinks = action.payload;
      })
      .addCase(fetchDrinksByFirstLetter.fulfilled, (state, action) => {
        state.drinks = action.payload;
      })
      .addCase(fetchDrinkById.fulfilled, (state, action) => {
        state.drink = action.payload;
      })
      .addCase(fetchRandomDrink.fulfilled, (state, action) => {
        state.drink = action.payload;
      });
  },
});

export default drinksSlice.reducer;
