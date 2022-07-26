const sohppingCart = [];


function showProducts() {
    let html = "";

    for (const item of fruits) {
        html += `<div class="card">
                    <img src="images/${item.img}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><b>מחיר: </b> ${item.price} ש"ח</p>
                        <button class="btn btn-primary" onclick="addProduct($(item))>הוסף לסל</button>
                    </div>
                </div>`
    }

    document.querySelector("#products").innerHTML = html;
}


showProducts();