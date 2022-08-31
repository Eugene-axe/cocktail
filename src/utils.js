export const  extractIngredientsAndMeasure = (cocktail) => {
  const recept = [];

  for (let i = 1; i <= 15; i++) {
    const obj = {
      ingredient: cocktail[`strIngredient${i}`],
      measure: cocktail[`strMeasure${i}`],
    };
    obj.ingredient && recept.push(obj);
  }
  return recept;
}
