const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const listIngredienst = ingredients.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  return newItem;
});

listRef.append(...listIngredienst);