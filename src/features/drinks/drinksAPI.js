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

export const getDrinkById = async (id = "") => {
  console.log("kkk");
  const result = await API.get(`lookup.php?i=${id}`);
  console.log(result.data.drinks[0]);
  return result.data.drinks[0];
};

export const getRandomDrink = async () => {
  const result = await API.get(`random.php`);
  return result.data.drinks[0];
};
