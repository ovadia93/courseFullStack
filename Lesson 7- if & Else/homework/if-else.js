function bigColor() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    // מציג רקע לבן קודם
    document.getElementById("num1").style.backgroundColor = 'white';
    document.getElementById("num2").style.backgroundColor = 'white';


    if (num1 > num2) {
        document.getElementById("num1").style.backgroundColor = 'green';

    } else if (num1 < num2) {
        document.getElementById("num2").style.backgroundColor = 'green';
    }

}

function check() {
    var answer = document.getElementById("answer").value;

    if (answer == 8) {
        alert("נכון");

    } else {
        alert("לא נכון");
    }


}

function less() {
    //לא קריטי שם המשתנה
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    var result = num3 - num4;

    document.getElementById("output").innerHTML = num3 + " - " + num4 + " = " + result;

}

var isBtn = true;

function btn() {
    isBtn = !isBtn;
    document.getElementById("btn").innerHTML = isBtn;
}

function replace() {
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;

    document.getElementById("num5").value = num6;
    document.getElementById("num6").value = num5;

}

function evenOrodd() {
    var num7 = Number(document.getElementById("num7").value);

    if (num7 % 2) {
        alert("אי זוגי");

    } else {
        alert("זוגי");
    }

}

function answer() {
    var sell = document.getElementById("sell").value;

    if (sell == 8) {
        alert("נכון");
    } else {
        alert("טעות")
    }

}

var num = 0;

function append() {
    num++;
    document.getElementById("output2").innerHTML += num + ",";
}