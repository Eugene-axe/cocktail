// "beforebegin" - Before the element. Only valid if the element is in the DOM tree and has a parent element.

// "afterbegin" - Just inside the element, before its first child.

// "beforeend" - Just inside the element, after its last child.

// "afterend" - after the element. Only valid if the element is in the DOM tree and has a parent element.
function insertElementInContainer(element, container) {
    container.insertAdjacentHTML('beforeend', element)
}

(function insertAlhabet() {
    const alphabetList = document.querySelector('.alphabet__list');
    const getAlphabetItem = (char) => `<li class="alphabet__item"><a href="#" class="alphabet__link">${char}</a></li>`
    const alphabet = 'bcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    alphabet.forEach(char => insertElementInContainer(getAlphabetItem(char), alphabetList))
})()


function insertSearchByLetterDrinksList(cocktails) {
    const container = document.querySelector('.search-alphabet__list');
    const ingredientsItem = ingAndMeas =>
        `<li class="ingredients__listitem">
        ${ingAndMeas.ingredients}
        </li>`

    const drinkItemStr = (drink, i) => `
<li class="drink__listitem">
    <div class="drink__icon"></div>
    <section class="drink__info">
        <h3 class="drink__title">${drink.strDrink}</h3>
        <p class="drink__description">${drink.strInstructions}</p>
        <div class="drink__ingredients">
            <ul class="ingredients__list ingList${i}">
                
            </ul>
        </div>
    </section>
</li>`;

    cocktails.forEach((drink, i) => {
        drink.ingredients = getIngredientsInMeasure(drink);
        insertElementInContainer(drinkItemStr(drink, i), container);
        const ingContainer = document.querySelector(`.ingList${i}`);
        drink.ingredients.forEach(ingAndMeas => insertElementInContainer(ingredientsItem(ingAndMeas), ingContainer));
    })
}

insertSearchByLetterDrinksList(cocktailsByLetter);



