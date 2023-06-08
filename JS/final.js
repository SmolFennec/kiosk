order = JSON.parse(localStorage.getItem("order"));

let loop=order.length;

for (let i = 0; i < loop; i++) {
    document.getElementById("order").innerHTML += "<tr><td>" + order[i].name + "</td><td>" + order[i].price + "</td><td>" + order[i].quantity + "</td><td>" + order[i].total + "</td></tr>";
}