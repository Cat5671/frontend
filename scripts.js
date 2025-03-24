const greetChangeButton = document.querySelector(".greeting-box-button");
const greeting = document.querySelector(".greeting-box-text");

let counter = 0;

greetChangeButton.addEventListener("click", () => {
    counter++;
    if (counter % 2 != 0) {
        greeting.textContent = "Hello, FEFU!";
    }
    else {
        greeting.textContent = "Hello, World!";
    }
});