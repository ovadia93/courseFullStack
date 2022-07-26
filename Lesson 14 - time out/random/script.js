function rand() {
    var names = document.getElementById('text').value;
    var arr = names.split('\n');
    var rand = Math.floor(Math.random() * arr.length);

    document.getElementById('output').innerHTML = arr[rand];
}

function add() {



}


function remove() {


}