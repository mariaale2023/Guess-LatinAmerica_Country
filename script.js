"use strict";

// ---------DEFINITION VARAIBLE--------------------

// List of country
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
let score = 5;
let highscore = 0;
let wrongGuess = []; // array to log the wrong answer
let firstLetter = secretCountry.charAt(0).toUpperCase(); // first letter SecretCountry

const btnGame = document.querySelector(".game");
const btnRestart = document.querySelector(".again");
const inputGuessCountry = document.querySelector(".guess");
const hiddenCountry = document.querySelector(".country");
const numHighscore = document.querySelector(".num-highscore");
const numScore = document.querySelector(".num-score");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const wrongAnswer = document.querySelector(".wrong-guess");

// ------------------SET UP GAME---------------

btnGame.addEventListener("click", (e) => {
  let guessCountry = inputGuessCountry.value.toLowerCase();
  console.log(guessCountry);

  // No answer
  if (!guessCountry) {
    message.textContent = "⛔ Write a country!";

    // Correct answer
  } else if (guessCountry === secretCountry) {
    message.textContent = "🎉You win!";
    hiddenCountry.textContent = secretCountry.toUpperCase();
    body.style.backgroundColor = "#73C6B6";

    if (score > highscore) {
      highscore = score;
      numHighscore.textContent = highscore;
    }

    inputGuessCountry.disabled = true;

    // Wrong answer
  } else if (guessCountry !== secretCountry) {
    if (score > 1) {
      //  Hint first letter
      message.textContent = `🔍Country start with letter ${firstLetter}`;

      // Decresing score
      numScore.textContent = --score;

      // Log wrong answer in Doc
      wrongGuess.push(guessCountry);
      wrongAnswer.innerHTML = wrongGuess;

      // Clean input field
      e.preventDefault();
      inputGuessCountry.value = "";

      // User lost
    } else {
      message.textContent = "   💀 You lost !!! ";
      numScore.textContent = 0;
    }
  }
});

// -----------Trigger the button element with a click--------------
inputGuessCountry.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btnGame.click();
  }
});

// ------------------SET UP RESTAR---------------

btnRestart.addEventListener("click", (e) => {
  e.preventDefault();

  //  Restore the started values
  score = 5;
  secretCountry = countries[Math.floor(Math.random() * countries.length)];
  firstLetter = secretCountry.charAt(0).toUpperCase();
  wrongGuess = [];

  inputGuessCountry.value = "";
  inputGuessCountry.disabled = false;
  hiddenCountry.textContent = "?";
  numHighscore.textContent = highscore;
  numScore.textContent = 5;
  message.textContent = `New country start with ${firstLetter}`;
  body.style.backgroundColor = "#FFF";
  wrongAnswer.textContent = "Your guess";
});
