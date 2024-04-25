const display = document.querySelector(".display");
const decrementButton = document.querySelector(".decrement");
const incrementButton = decrementButton.nextElementSibling;
const input = document.querySelector("#input");
const resetButton = input.parentElement.parentElement.nextElementSibling.firstElementChild;

input.value = 1;

decrementButton.addEventListener("click", (e) => {
    let inputNumber = Number(input.value);
    outputNumber = Number(display.innerText);
    display.innerText = `${outputNumber - inputNumber}`;
})

incrementButton.addEventListener("click", (e) => {
    let inputNumber = Number(input.value);
    outputNumber = Number(display.innerText);
    display.innerText = `${outputNumber + inputNumber}`;
})

resetButton.addEventListener("click", (e) => {
    input.value = 1;
    display.innerText = 0;
})