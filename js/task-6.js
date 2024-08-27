function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const inputNumber = document.querySelector('#controls input');
const divBoxes = document.querySelector('#boxes');

// Обробник для кнопки Create
buttonCreate.addEventListener('click', () => {
  const amount = parseInt(inputNumber.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = ''; // Очищуємо значення інпуту
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Обробник для кнопки Destroy
buttonDestroy.addEventListener('click', destroyBoxes);

// Функція для створення боксов
function createBoxes(amount) {
  divBoxes.innerHTML = ''; // Очищуємо попередні елементи

  let size = 30; // Початковий розмір для першого div

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${size}px`;
    newDiv.style.width = `${size}px`;
    newDiv.style.margin = `10px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    divBoxes.appendChild(newDiv);
    size += 10; // Збільшуємо розмір на 10px для наступного div
  }
}

// Функція для очищення боксов
function destroyBoxes() {
  divBoxes.innerHTML = ''; // Очищуємо всі елементи в #boxes
}
