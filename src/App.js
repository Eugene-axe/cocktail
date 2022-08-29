import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchDrinkById,
  fetchDrinksByFirstLetter,
  fetchDrinksByName,
} from "./features/drinks/drinksSlice";
// import { Counter } from "./features/counter/Counter";

function App() {
  const dispatch = useDispatch();
  const handleButtonClick = (event) => {
    console.log("click");
    dispatch(fetchDrinksByName("margarita"));
    dispatch(fetchDrinksByFirstLetter("a"));
    dispatch(fetchDrinkById("11007"));
  };
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleButtonClick}>
          ебаш
        </button>
      </header>
    </div>
  );
}

export default App;
