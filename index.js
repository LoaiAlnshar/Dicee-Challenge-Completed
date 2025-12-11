// var number = Math.random() * 6;
// number = Math.round(number);
// console.log(number);
// var player1 =document.querySelector("#player1");
// console.log(player1);
// var oldClass = document.querySelector("#player1").classList;
// console.log(oldClass);
// player1.classList.replace(oldClass, "player" + number);
// console.log(player1.classList);

function numberImgOne() {
var number = Math.random() * 5;
number = Math.round(number)+1;
return number;
}

function numberImgTow() {
var number = Math.random() * 5;
number = Math.round(number)+1;
return number;
}

var player1 =document.querySelector("#player1");
var player2 =document.querySelector("#player2");

var oldClass1 = document.querySelector("#player1").classList;
var oldClass2 = document.querySelector("#player2").classList;

player1.classList.replace(oldClass1, "img" + numberImgOne());
player2.classList.replace(oldClass2, "img" + numberImgTow());

var result = document.querySelector("h1");

if (player1.classList.value > player2.classList.value) {
    result.innerHTML = "🚩 Player 1 Wins!";
} else if (player1.classList.value < player2.classList.value) {
    result.innerHTML = "Player 2 Wins! 🚩";
} else {
    result.innerHTML = "Draw! Refresh Me Again!";
}   