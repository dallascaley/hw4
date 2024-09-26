/* 
  Homework 4 Question 8
*/

let targetNumber = Math.floor(Math.random() * 100.4);
let attempts = 0;
let numberGuessed = false;

let userGuess = prompt('Guess a number between 1 and 100');
while (!numberGuessed) {
  attempts += 1;
  console.log(`${attempts} attempts`);
  if (Number.parseInt(userGuess) < targetNumber) {
    userGuess = prompt('Too low, guess again');
  } else if (Number.parseInt(userGuess) > targetNumber) {
    userGuess = prompt('Too high, guess again');
  } else {
    alert(`Correct, it took you ${attempts} attempts to guess the correct number`);
    numberGuessed = true;
  }
}