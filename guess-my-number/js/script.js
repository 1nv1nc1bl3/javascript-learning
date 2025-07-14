'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to replace document.querySelector('.message')
const displayMessage = function (param) {
    document.querySelector('.message').textContent = param;
};
// Function to replace document.querySelector('.number')
const setNumber = function (param) {
    document.querySelector('.number').textContent = param;
};
// Function to replace document.querySelector('.score')
const setScore = function (param) {
    document.querySelector('.score').textContent = param;
};

// Main game logic
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        setNumber(secretNumber);

        // Highscore functionality
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            setScore(score);
        } else {
            setScore(0);
            displayMessage('💥 You lost the game!');
        }
    }
});

// Button 'Again'
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    setScore(score);
    setNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
