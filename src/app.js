import "bootstrap";
import "./style.css";

/*
window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNum();
};

let generateRandomNum = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "9", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamonds", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
*/
/*♦ ♥ ♠ ♣*/
window.onload = function() {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];

  var palos = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];

  let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];

  document.querySelectorAll(".palo").forEach(elem => {
    elem.innerHTML = palo.s;
    elem.style.color = palo.color;
  });

  document.querySelector(".numero").innerHTML = numero;
  document.querySelector(".numero").style.color = palo.color;
};
