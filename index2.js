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
var numberOne = numberImgOne();
var numberTow = numberImgTow();

var player1 =document.querySelector("#player1");
var player2 =document.querySelector("#player2");

player1.setAttribute("src", "./images/dice" + numberOne +".png");
player2.setAttribute("src", "./images/dice" + numberTow+".png");

console.log("befor comber " + numberOne);
console.log("befor comber " + numberTow);

var result = document.querySelector("h1");

if (numberOne > numberTow) {

    console.log("inside comber if first biger " + numberOne);
    console.log("inside comber if first biger " + numberTow);

    result.innerHTML = "🚩 Player 1 Wins!";
} else if (numberOne < numberTow) {

    console.log("inside comber if tow biger " + numberOne);
    console.log("inside comber if tow biger " + numberTow);

    result.innerHTML = "Player 2 Wins! 🚩";
} else {

    console.log("inside comber if both same " + numberOne);
    console.log("inside comber if both same " + numberTow);

    result.innerHTML = "Draw! Refresh Me Again!";
}   