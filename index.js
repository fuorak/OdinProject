/*index.js*/

let playerChoice = "Rock";
let comChoice = "Paper";
let playerScore = 0;
let comScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

const resultContent = document.querySelector("resultBox");

function alertFunction() {
    alert("This is a test");
}

function playerSelect(selection) {
    playerChoice = selection;
}

function comSelect() {
    comChoice = Math.random() * (3 - 1) + 1;

    if (comChoice = 1) {
        comChoice = "rock";
    } else if (comChoice = 2) {
        comChoice = "paper";
    } else if (comChoice = 3) {
        comChoice = "scissors";
    }
}

function playRound() {
    comChoice();

    if (playerChoice = "rock") {

        if (comChoice = "rock") {
            /* draw */
        } else if (comChoice = "paper") {
            comScore = comScore + 1;
        } else if (comChoice = "scissors") {
            playerScore = playerScore + 1;
        }

    } else if (playerChoice = "paper") {

        if (comChoice = "rock") {
            playerScore = playerScore + 1;
        } else if (comChoice = "paper") {
            /* draw */
        } else if (comChoice = "scissors") {
            comScore = comScore + 1;
        }

    } else if (playerChoice = "scissors") {

        if (comChoice = "rock") {
            comScore = comScore + 1;
        } else if (comChoice = "paper") {
            playerScore = playerScore + 1;
        } else if (comChoice = "scissors") {
            /* draw */
        }
    }

    if (playerScore = 5) {
        resultContent.textContent = "You Win!";
    } else if (comScore = 5) {
        resultContent.textContent = "COM Wins!";
    } else {
        resultContent.textContent = "Player: " + playerScore + " COM: " + comScore;
    }
}


rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    playRound();
});

paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    playRound();
});

scissorBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    playRound();
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});