import API from "../../api";

export const searchIngredientsByName = async (name = "") => {
  const url = `search.php?i=${name}`;
  const result = await API.get(url);
  return result.data.ingredients;
};

export const getIngredientById = async (id = "") => {
  const url = `lookup.php?iid=${id}`;
  const result = await API.get(url);
  return result.data.ingredients[0];
};

export const getAllIngredients = async () => {
  const url = `list.php?i=list`;
  const result = await API.get(url);
  return result.data.drinks;
};
