
const categoryRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryRef.length} `);


const items = categoryRef.forEach(item => {
     console.log('Category:',item.querySelector('h2').textContent)
    console.log('Elements:',item.querySelectorAll('li').length)
})


