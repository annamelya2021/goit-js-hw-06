const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsRef = document.querySelector("#ingredients");

const newArr= [];

for (const ingredient of ingredients) {
  const newItemLi = document.createElement("li");
  newItemLi.textContent = ingredient;
newItemLi.classList.add('item');
  newArr.push(newItemLi);
}

ingredientsRef.append(...newArr);


// const listRef = document.querySelector('#ingredients');

// const listIngredienst = ingredients.map(ingredient => {
//   const newItem = document.createElement('li');
//   newItem.textContent = ingredient;
//   newItem.classList.add('item');
//   return newItem;
// });

// listRef.append(...listIngredienst);