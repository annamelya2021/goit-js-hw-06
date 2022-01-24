const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createMarkUp = ingredients.map(item => {
    const ingredient = document.createElement('li')
    ingredient.textContent = `${item}`
    ingredient.classList.add('item')
    return ingredient
});

ingredientsRef.append(...createMarkUp);
