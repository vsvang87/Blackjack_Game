/*
let myCard = document.getElementById("my__card");
let sum = document.getElementById("sum");
let gameMessage = document.getElementById("game__message");
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let total = 0;
let isAlive = true;
let hasBlackjack = false;
let message = "";
let cards = [];

let chips = document.getElementById("chips");

//player object
let player = {
  name: "Visay",
  chips: 100,
};

let playerOne = document.getElementById("player1");
playerOne.textContent = player.name + ": $" + player.chips;

//get random card
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

//start game
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  total = firstCard + secondCard;
  renderGame();
  gameMessage.innerText = message;
}

function renderGame() {
  myCard.textContent = "Cards: " + cards;
  //for loop
  for (let i = 0; i < cards.length; i++) {
    total.textContent = cards[i] + " ";
  }
  sum.innerText = "Sum: " + total;
  if (total < 21) {
    message = "You can draw card";
  } else if (total === 21) {
    message = "You got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You Loose!";
    isAlive = false;
  }
  gameMessage.innerText = message;
}

//draw card
function drawCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    total += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
*/

//objects
let course = {
  title: "Learn CSS for free",
  lessons: 16,
  creator: "Visay Vang",
  level: 2,
  length: 16,
  isFree: true,
  tags: ["HTML", "CSS"],
};
console.log(course.length);
