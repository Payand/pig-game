'use strict';

//Selecting elements
const playerzeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');

const scoreZeroEl = document.querySelector('#score--0');
const scoreOneEl = document.getElementById('score--1');
const currentZeroEl = document.getElementById('current--0');
const currentoneEl = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// Starting conditons
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
buttonRoll.addEventListener('click', function() {
    //1. Genarating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1 : if true ,switch to next Player
    if (dice !== 1) {
        // Add dice to the current score
        currentScore += dice;

        document.getElementById(
            `current--${activePlayer}`
        ).textContent = currentScore;
    } else {
        // SWiching player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        playerzeroEl.classList.toggle('player--active');
        playerOneEl.classList.toggle('player--active');
    }
});

buttonHold.addEventListener('click', function() {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // 2. Check if players's score is >= 100

    // Finish game
    // Switch tothe  next player
});