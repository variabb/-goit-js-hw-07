function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const inputNumber = document.querySelector('#controls input');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = parseInt(inputNumber.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100');
  }
});


buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); 
  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${size}px`;
    newDiv.style.width = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.margin = `10px`;
    
    fragment.appendChild(newDiv); 
    size += 10; 
  }

  divBoxes.innerHTML = ''; 
  divBoxes.appendChild(fragment); 
}


function destroyBoxes() {
  divBoxes.innerHTML = ''; 
}
