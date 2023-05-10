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

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// ALE ESTA PARTE DEBES CORREGIR . BUSAR MANERA DE COMO OBTENER LA PRIMERA LETRA

// --------------- ---SET UP GAME---------------

document.querySelector(".game").addEventListener("click", function () {
  //
  let guessCountry = document.querySelector(".guess").value;
  console.log(guessCountry, typeof guessCountry);

  //---logic game start

  if (!guessCountry) {
    document.querySelector(".message").textContent = "⛔ Write a country!";
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
  } else if (guessCountry !== secretCountry) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `🔍Country start with letter ${secretCountry
        .charAt(0)
        .toUpperCase()}`;
      // console.log(secretCountry.split(""));

      let arr = [];
      function guardarCountries() {
        const newArr = document.querySelector(".guess").value;
        arr.push[newArr];
        console.log(arr);
      }

      document.querySelector(".num-score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "   💀 You lost !!! ";
      document.querySelector(".num-score").textContent = 0;
    }
  }
});

/*  ALE REVISAR LOS SIGUIENTE:


2. Crear un input al final para poder ir creando un array con las respuestas incorrectas

3.crear un array con los nuevos value

4. que el juego se ejecute tambien cuando presionamos el boton "enter'"

*/
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretCountry = countries[Math.floor(Math.random() * countries.length)];

  document.querySelector(".guess").value = " ";
  document.querySelector(".country").textContent = "?";
  document.querySelector(".num-highscore").textContent = highscore;
  document.querySelector(".num-score").textContent = 10;
  document.querySelector(".message").textContent = "🕵️‍♂️ Start guess again !!!";
  document.querySelector("body").style.backgroundColor = "#FFF";
});
