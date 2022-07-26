function dollar() {
    var dollarRate = 3.21;
    var num = document.getElementById("shekelDollar").value;
    var result = Math.round(num / dollarRate * 100) / 100;
    document.getElementById("output").innerHTML = "$" + result;
}

function setColor() {

    var c = document.getElementById("color").value;
    document.body.style.backgroundColor = c;

}

function rectangle() {

    var x = document.getElementById("height").value;
    var y = document.getElementById("width").value;

    document.getElementById("output2").innerHTML = x * 2 + y * 2;

}

function diceRoll() {

    var max = 6;
    var min = 1;
    var random = Math.random();

    var result = Math.floor(random * max) + min;

    document.getElementById("dice").src = "Dices/Dice" + result + ".png";


}

function diceRollTwo() {

    var max = 6;
    var min = 1;
    var random1 = Math.random();
    var random2 = Math.random();

    var result1 = Math.floor(random1 * max) + min;
    var result2 = Math.floor(random2 * max) + min;

    document.getElementById("dice2").src = "Dices/Dice" + result1 + ".png";

    document.getElementById("dice3").src = "Dices/Dice" + result2 + ".png";


}