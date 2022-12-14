import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./routes/MainPage";
import "./index.css";
import { AlphabetPage } from "./routes/AlphabetPage";
import { DrinksSearchResult } from "./routes/DrinksSearchResult";
import { DrinkPage } from "./routes/DrinkPage";
import { IngredientsList } from "./routes/IngredientsList";
import { IngredientPage } from "./routes/IngredientPage";
import { DrinkCreator } from "./routes/DrinkCreator";
import { CreatorResult } from "./routes/CreatorResult";
import { NotFound } from "./routes/NotFound";
import { SearchResult } from "./routes/SearchResult";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="/alphabet" element={<AlphabetPage />} />
          <Route path="/alphabet/:letter" element={<DrinksSearchResult />} />
          <Route path="/drinks/:idDrink" element={<DrinkPage />} />
          <Route path="/ingredients" element={<IngredientsList />} />
          <Route
            path="/ingredients/:ingredientName"
            element={<IngredientPage />}
          />
          <Route path="/creator" element={<DrinkCreator />} />
          <Route path="/creator-result" element={<CreatorResult />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
