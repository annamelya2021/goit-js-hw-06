
const counter = {

    value: 0,
    increment() {
        this.value += 1;

    },
      decrement() {
        this.value -= 1;

    }
}

const valueEl= document.querySelector('#value');
const addBtn = document.querySelector('[data-action="increment"]');
const subBtn = document.querySelector('[data-action="decrement"]');


addBtn.addEventListener('click', function () {
 counter.increment();
   valueEl.textContent = counter.value;

})
subBtn.addEventListener('click', function () {
 counter.decrement();
   valueEl.textContent = counter.value;

})



