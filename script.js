let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  if (isInvalidInput(humanGuess)) {
    alert('Please enter a number between 0 and 9.');
    return;
  }
  return difference(humanGuess, targetNum) <= difference(computerGuess, targetNum);
}

const isInvalidInput = input => {
  const inputAsInt = parseInt(input);
  return inputAsInt < 0 || inputAsInt > 9;
}

const difference = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const updateScore = winner => {
  if (winner === 'human') humanScore++;
  if (winner === 'computer') computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}