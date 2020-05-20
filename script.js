let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Please enter a number between 0 and 9.');
    return;
  }
  const userCloseness = getAbsoluteDistance(userGuess, targetNumber);
  const computerCloseness = getAbsoluteDistance(computerGuess, targetNumber);
  if (computerCloseness < userCloseness)
    return false;
  else return true;
}

const updateScore = winner => {
  if (winner === 'human') humanScore++;
  else if (winner === 'computer') computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}