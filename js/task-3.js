const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value.trim();

   
    if (inputValue) {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = "Anonymous";
    }
});