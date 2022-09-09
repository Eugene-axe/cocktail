import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../const";
import { extractIngredientsAndMeasure } from "../../utils";
import {
  getDrinkById,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
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

export const fetchDrinksByIngredient = createAsyncThunk(
  "drinks/fetchDrinksByIngredient",
  async (ingredient) => {
    const response = await getDrinksByIngredient(ingredient);
    return response;
  }
);

export const fetchDrinksByManyIngredients = createAsyncThunk(
  "drink/fetchDrinksByManyIngredients",
  async (ingredients) => {
    console.log({ ingredients });
    if (!ingredients.length) return [];
    const requests = ingredients.map(async (ingredient) => {
      const response = await getDrinksByIngredient(ingredient);
      return response;
    });
    const response = await Promise.all(requests);
    const intersectionDrinksIds = response.reduce((acc, arrayDrinks) =>
      acc.filter((drink) =>
        arrayDrinks.find((drink2) => drink.idDrink === drink2.idDrink)
      )
    );
    return intersectionDrinksIds;
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
        state.status = STATUS.SUCCEEDED;
        state.drinks = action.payload;
      })
      .addCase(fetchDrinksByFirstLetter.pending, (state, action) => {
        state.status = STATUS.IDLE;
      })
      .addCase(fetchDrinksByFirstLetter.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.drinks = action.payload || [];
      })
      .addCase(fetchDrinksByIngredient.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.drinks = action.payload;
      })
      .addCase(fetchDrinkById.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        const drink = action.payload;
        drink.ingredients = extractIngredientsAndMeasure(drink);
        state.drink = drink;
      })
      .addCase(fetchRandomDrink.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        const drink = action.payload;
        drink.ingredients = extractIngredientsAndMeasure(drink);
        state.drink = drink;
      })
      .addCase(fetchDrinksByManyIngredients.pending, (state, action) => {
        state.status = STATUS.IDLE;
      })
      .addCase(fetchDrinksByManyIngredients.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.drinks = action.payload;
      });
  },
});

export default drinksSlice.reducer;

export const drinks = (state) => state.drinks.drinks;
export const drink = (state) => state.drinks.drink;
export const drinkStatus = (state) => state.drinks.status;
