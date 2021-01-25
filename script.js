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
// global variables
let scores, currentScore, activePlayer, playing;

// Starting conditons and initialzing

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scoreZeroEl.textContent = 0;
    scoreOneEl.textContent = 0;
    currentZeroEl.textContent = 0;
    currentoneEl.textContent = 0;
    diceEl.classList.remove('hidden');
    playerzeroEl.classList.remove('player--winner');
    playerOneEl.classList.remove('player--winner');
    playerzeroEl.classList.add('player--active');
    playerOneEl.classList.remove('player--winner');
};
init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerzeroEl.classList.toggle('player--active');
    playerOneEl.classList.toggle('player--active');
};
// Rolling dice functionality
buttonRoll.addEventListener('click', function() {
    if (playing) {
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
            switchPlayer();
        }
    }
});

buttonHold.addEventListener('click', function() {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // 2. Check if players's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish game
            playing = false;
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to the  next player
            switchPlayer();
        }
    }
});
//reset button
buttonNew.addEventListener('click', init);