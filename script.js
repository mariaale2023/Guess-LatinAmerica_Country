"use strict";

// ---------DEFINITION VARAIBLE--------------------

// ---array list of country
const countries = [
  "argentina",
  "bolivia",
  "brasil",
  "chile",
  "colombia",
  "ecuador",
  "guyana",
  "paraguay",
  "peru",
  "surinam",
  "uruguay",
  "venezuela",
];

//---random  name of country
let secretCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(secretCountry);

secretCountry.charAt(0);

// ---Initial Score & Highscore
let score = 10;
let highscore = 0;
let wrongGuess = []; // array to log the wrong answer
let firstLetter = secretCountry.charAt(0).toUpperCase(); // first letter SecretCountry

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// ------------------SET UP GAME---------------

document.querySelector(".game").addEventListener("click", (e) => {
  let guessCountry = document.querySelector(".guess").value;
  console.log(guessCountry);

  //---Logic game start

  // If there are no answer----
  if (!guessCountry) {
    document.querySelector(".message").textContent = "⛔ Write a country!";

    // If is Correct answer----
  } else if (guessCountry === secretCountry) {
    document.querySelector(".message").textContent = "🎉You win!";
    document.querySelector(".country").textContent = secretCountry;
    document.querySelector(".country").textContent =
      secretCountry.toUpperCase();

    document.querySelector("body").style.backgroundColor = "#73C6B6";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".num-highscore").textContent = highscore;
    }

    // If answer is wrong----
  } else if (guessCountry !== secretCountry) {
    if (score > 1) {
      //  Hint first letter
      document.querySelector(
        ".message"
      ).textContent = `🔍Country start with letter ${firstLetter}`;

      // Decresing score (lives)
      document.querySelector(".num-score").textContent = --score;

      // Log the wrong answer in the Document
      wrongGuess.push(guessCountry);
      document.querySelector(".wrong-guess").innerHTML = wrongGuess;

      // Clean input field
      e.preventDefault();
      document.querySelector(".guess").value = "";

      // Log in document you lost
    } else {
      document.querySelector(".message").textContent = "   💀 You lost !!! ";
      document.querySelector(".num-score").textContent = 0;
    }
  }
});

// ------------------SET UP Enter Keybord---------------
document.querySelector(".guess").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".game").click();
  }
});

// ------------------SET UP RESTAR---------------

document.querySelector(".again").addEventListener("click", (e) => {
  e.preventDefault();

  //  Restore the started values
  score = 10;
  secretCountry = countries[Math.floor(Math.random() * countries.length)];
  firstLetter = secretCountry.charAt(0).toUpperCase();
  wrongGuess = [];

  document.querySelector(".guess").value = "";
  document.querySelector(".country").textContent = "?";
  document.querySelector(".num-highscore").textContent = highscore;
  document.querySelector(".num-score").textContent = 10;
  document.querySelector(
    ".message"
  ).textContent = `New country start with ${firstLetter}`;

  document.querySelector("body").style.backgroundColor = "#FFF";
  document.querySelector(".wrong-guess").textContent = "Your guess";
});
