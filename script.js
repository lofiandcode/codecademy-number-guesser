let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (computerGuess, humanGuess, targetGuess) => {
  return difference(playerGuess, targetNum) <= difference(computerGuess, targetNum);
}

const difference = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } 
  if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}