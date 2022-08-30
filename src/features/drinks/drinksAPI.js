import API from "../../api";

export const getDrinksByName = async (name = "") => {
  const url = `search.php?s=${name}`;
  const result = await API.get(url);
  return result.data.drinks;
};

export const getDrinksByFirstLetter = async (letter = "") => {
  const result = await API.get(`search.php?f=${letter}`);
  return result.data.drinks;
};
export const getDrinksByIngredient = async (ingredient = "") => {
  const result = await API.get(`filter.php?i=${ingredient}`);
  return result.data.drinks;
};

export const getDrinkById = async (id = "") => {
  const result = await API.get(`lookup.php?i=${id}`);
  return result.data.drinks[0];
};

export const getRandomDrink = async () => {
  const result = await API.get(`random.php`);
  return result.data.drinks[0];
};
