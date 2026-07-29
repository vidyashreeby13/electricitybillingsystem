function calculateBill() {

    let name = document.getElementById("name").value;
    let units = Number(document.getElementById("units").value);

    let bill = 0;

    if (units <= 100)
        bill = units * 2;
    else if (units <= 200)
        bill = 200 + (units - 100) * 3;
    else
        bill = 500 + (units - 200) * 5;

    document.getElementById("result").innerHTML =
        "Customer Name: " + name +
        "<br>Total Bill: ₹" + bill;
}
