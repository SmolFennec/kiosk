let ButtArray = ["burger", "sandwich", "beef", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger"];
let fooddict = {"burger":5.99, "sandwich":4.99, "beef":6.99};
let order = [];
let total = 0;

function clicked(Bnum) {
    let Butt = ButtArray[Bnum];
    order.push(Butt);
    document.getElementById("L3").innerHTML = document.getElementById("L2").innerHTML;
    document.getElementById("L2").innerHTML = document.getElementById("L1").innerHTML;
    document.getElementById("L1").innerHTML = Butt +"                                              £" + fooddict[Butt];

    total += fooddict[Butt];

    document.getElementById("total").innerHTML = "£" + total.toFixed(2);
}

function finalise(){ n
    localStorage.setItem("order", JSON.stringify(order));
    window.location.href = "final.php";
}