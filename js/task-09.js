
const BtnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function changeColor(event) {
  const bodyColor = getRandomHexColor();
  bodyRef.style.backgroundColor = bodyColor;
  spanRef.textContent = bodyColor
}

BtnRef.addEventListener('click', changeColor);


