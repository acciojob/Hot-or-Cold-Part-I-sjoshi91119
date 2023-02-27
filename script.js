
//your code here
// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Store the previous guess
let previousGuess;

function checkGuess() {
  // Get the user's guess from the input field
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    // If the user's guess is not a valid number, show an error message
    document.getElementById("response").textContent = "Please enter a number between 1 and 100.";
  } else if (guess === secretNumber) {
    // If the user's guess is correct, show a success message
    document.getElementById("response").textContent = "Congratulations, you guessed the number!";
  } else {
    // Calculate the difference between the user's guess and the secret number
    const difference = Math.abs(guess - secretNumber);

    if (previousGuess === undefined) {
      // If this is the first guess, show a hint to go higher or lower
      document.getElementById("response").textContent = guess > secretNumber ? "Guess lower" : "Guess higher";
    } else {
      // Calculate the difference between the previous guess and the secret number
      const previousDifference = Math.abs(previousGuess - secretNumber);

      if (difference < previousDifference) {
        // If the user is getting closer to the secret number, show a "getting hotter" message
        document.getElementById("response").textContent = guess > previousGuess ? "Getting hotter, guess lower" : "Getting hotter, guess higher";
      } else {
        // If the user is getting further from the secret number, show a "getting colder" message
        document.getElementById("response").textContent = guess > previousGuess ? "Getting colder, guess higher" : "Getting colder, guess lower";
      }
    }

    // Store the current guess as the previous guess for the next round
    previousGuess = guess;
  }
}

