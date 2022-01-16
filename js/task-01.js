// получаем ссылку на все li и считаем
const categoryRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryRef.length} `);

for (const item of categoryRef) {
  const titleRef = item.firstElementChild;
  console.log(`Category: ${titleRef.textContent}`);
  const listEl = titleRef.nextElementSibling;
  console.log(`Elements: ${listEl.children.length}`);
}