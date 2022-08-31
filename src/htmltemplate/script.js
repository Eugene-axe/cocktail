function getIngredientsInMeasure(cocktail) {
    const recept = [];

    for (let i = 1; i <= 15; i++) {
        const obj = {
            ingredients: cocktail[`strIngredient${i}`],
            measure: cocktail[`strMeasure${i}`],
        };
        obj.ingredients && recept.push(obj);
    }
    return recept;
}



