'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// document.querySelector('.player--0');
// document.querySelector('.player--1');

// Declaring values
let currentScore, activePlayer, playing;
const scores = [0, 0];

/* *** Functions *** */
// Initializing element values
const init = function () {
    // Dice becomes hidden
    diceEl.classList.add('hidden');

    // Buttons become visible
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');

    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // Current scores become 0
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Player 0 score becomes 0
    score0El.textContent = 0;

    // Player 1 score becomes 0
    score1El.textContent = 0;

    // Remove 'winner' class
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    // Remove 'player--active' class in case Player 1 has it
    player1El.classList.remove('player--active');

    // Add 'player--active' class to Player 0
    player0El.classList.add('player--active');
};
const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Starting the game
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `assets/photos/dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;

            // Update player score
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to next player
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
});

// Holding the score
btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        console.log(scores);
        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            btnHold.classList.add('hidden');
            btnRoll.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// Starting a new game
btnNew.addEventListener('click', function () {
    init();
});
