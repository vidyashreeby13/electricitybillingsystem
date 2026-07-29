<!DOCTYPE html>
<html>
<head>
<title>Electricity Billing System</title>
</head>
<body>
<h2>Electricity Bill Calculator</h2>

Units: <input type="number" id="units"><br><br>

<button onclick="bill()">Calculate</button>

<h3 id="result"></h3>

<script>
function bill() {
    let units = document.getElementById("units").value;
    let amount = units * 5;
    document.getElementById("result").innerHTML =
        "Total Bill = ₹" + amount;
}
</script>

</body>
</html>
