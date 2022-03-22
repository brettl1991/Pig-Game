'use strict';
//set the game to the starting point

//selecting elements
const score0El = document.querySelector('#score--0'); //or other way for id-s
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
//rolling the dice
btnRoll.addEventListener('click', function () {
  //1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //Display a dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //Checked for roll 1: if true switch to next player
  if (dice !== 1) {
    //add the dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore; //change later
  } else {
    //switch to the next player
  }
});
