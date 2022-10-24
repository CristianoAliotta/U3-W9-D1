"use strict";
let genitore1 = 75;
let genitore2 = 13;
let numberToGuess = Math.floor(Math.random() * 99 + 1);
console.log(numberToGuess);
function checker() {
    if (genitore1 === numberToGuess || genitore2 === numberToGuess) {
        if (genitore1 === numberToGuess) {
            console.log("Complimenti genitore 1 hai indovinato!");
        }
        else {
            console.log("Complimenti genitore 2 hai indovinato!");
        }
    }
    else if ((Math.abs(numberToGuess - genitore1) < Math.abs(numberToGuess - genitore2))) {
        console.log("Genitore 1 si è avvicinato di più di genitore 2");
    }
    else {
        console.log("Genitore 2 si è avvicinato di più di genitore 1");
    }
}
checker();
