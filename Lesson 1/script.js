function nameAlert() {
    alert(`הלו ${document.getElementById('userName').value}`);
}

function calc() {
    x = document.getElementById('firstNum');
    y = document.getElementById('secondNum');

    alert(Number(x.value) * Number(y.value));
    // exercise D
    x.value = "";
    y.value = "";
}

