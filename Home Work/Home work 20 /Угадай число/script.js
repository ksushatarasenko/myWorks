const form = document.querySelector("form");
const userInput = document.querySelector("#guessInput");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");

const uspech = document.querySelector("#uspech");
const error = document.querySelector("#error");


let randomNum = Math.floor(Math.random() * 100) + 1;//  рандомное число от 1 до 100
console.log (randomNum);
let numGuesses = 0;// для попыток

// функция

form.onsubmit = (e) => {
    e.preventDefault();
    numGuesses++;
    const num = parseInt(userInput.value);
    if(num === randomNum) {
            result.innerText = `Вы выиграли!\n Числo - ${randomNum}\n нажмитие на кнопку \nReset\n для повторной игры`;
            uspech.play();
        } else if (numGuesses >= 5) {
            result.innerText = `Вы превысили лимит попыток ((Задуманое число было- ${randomNum})\n попробуйте снова)`;
            error.play();
        } else {
            if (num < randomNum) {
             result.innerText = `Вы ввели - ${userInput.value}\n Задуманное число больше, попробуйте снова!`;
             error.play();
        } else if(num> randomNum) {
            result.innerText = `Вы ввели - ${userInput.value}\n Задуманное число меньше, попробуйте снова!`;
            error.play();

        }
    }
    userInput.value = "";
};

reset.onclick = () => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
    userInput.value = "";
    reset.innerText = "";
    location.reload();
}

