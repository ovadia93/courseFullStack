function showSmall() {
    var num1 = document.getElementById("num1").value
    document.getElementById("output1").innerHTML = "";
    var i = 1;

    while (i < Number(num1)) {
        document.getElementById("output1").innerHTML += i + ", ";
        i++;

    }
}

function showBetween() {
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    document.getElementById("output2").innerHTML = "";

    var i = Number(num2);

    while (i <= Number(num3)) {
        document.getElementById("output2").innerHTML += i + ", ";
        i++;
    }
}

function showResize() {
    var num4 = Number(document.getElementById("num4").value);
    document.getElementById("output3").innerHTML = "";

    var i = 0;

    while (i < num4) {
        i++;
        var html = "<span style=\"font-size: " + i * 3 + "px;\">" + i + ", </span>";
        document.getElementById("output3").innerHTML += html;
    }
}

function showSum() {
    var num5 = Number(document.getElementById("num5").value);

    var sum = 0;
    var i = 1;

    while (i <= num5) {
        sum += i;
        i++;
    }
    document.getElementById("output4").innerHTML = sum;

}