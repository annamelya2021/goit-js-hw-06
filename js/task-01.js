
const categoryRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryRef.length} `);


for (const item of categoryRef) {
    console.log('Category:',item.querySelector('h2').textContent)
    console.log('Elements:',item.querySelectorAll('li').length)
}