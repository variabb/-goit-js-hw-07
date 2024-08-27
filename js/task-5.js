function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')

button.addEventListener('click', handleClick);

function handleClick (event) {
 
  const body = document.querySelector('body');
  const backgroundColor = body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = backgroundColor;

};

