var numbers = [];

function add() {
    if (event.keyCode == 13) {

        var num = document.getElementById("num").value;
        numbers.push(Number(num));
        document.getElementById("num").value = "";
        show();
    }
}

function show() {
    document.getElementById("output").innerHTML = numbers.join();
}

function sort() {
    numbers.sort(function(a, b) {
        return a - b;
    });
    show();
}

function removeLast() {
    document.getElementById("message").innerHTML = numbers.pop();
    show();

}