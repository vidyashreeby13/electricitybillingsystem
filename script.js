function calculateBill() {

    let id = document.getElementById("customerId").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let date = document.getElementById("date").value;
    let units = Number(document.getElementById("units").value);

    if (name === "" || units === "") {
        alert("Please fill all required fields.");
        return;
    }

    let rate = 5;
    let bill = units * rate;

    document.getElementById("result").innerHTML =
        "<h2>Electricity Bill</h2>" +
        "<hr>" +
        "<p><b>Customer ID:</b> " + id + "</p>" +
        "<p><b>Customer Name:</b> " + name + "</p>" +
        "<p><b>Address:</b> " + address + "</p>" +
        "<p><b>Mobile Number:</b> " + mobile + "</p>" +
        "<p><b>Bill Date:</b> " + date + "</p>" +
        "<p><b>Units Consumed:</b> " + units + "</p>" +
        "<p><b>Rate per Unit:</b> ₹5</p>" +
        "<h3>Total Bill: ₹" + bill + "</h3>";
}
