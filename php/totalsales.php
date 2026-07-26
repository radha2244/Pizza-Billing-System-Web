<?php
include "db.php";

// Total Orders
$orderResult = mysqli_query($conn, "SELECT COUNT(*) AS totalOrders FROM orders");
$orderData = mysqli_fetch_assoc($orderResult);

// Total Sales
$salesResult = mysqli_query($conn, "SELECT SUM(total) AS totalSales FROM orders");
$salesData = mysqli_fetch_assoc($salesResult);

// Total GST
$gstResult = mysqli_query($conn, "SELECT SUM(gst) AS totalGST FROM orders");
$gstData = mysqli_fetch_assoc($gstResult);

// Highest Bill
$maxResult = mysqli_query($conn, "SELECT MAX(total) AS highestBill FROM orders");
$maxData = mysqli_fetch_assoc($maxResult);
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Total Sales</title>

<style>

body{
    font-family:Arial;
    background:#f5f5f5;
    margin:0;
}

h1{
    text-align:center;
    background:#ff9800;
    color:white;
    padding:15px;
}

.container{
    width:80%;
    margin:40px auto;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:30px;
}

.card{

    background:white;
    padding:30px;
    text-align:center;
    border-radius:10px;
    box-shadow:0 0 10px gray;

}

.card h2{

    color:#ff9800;

}

.card p{

    font-size:30px;
    font-weight:bold;

}

</style>

</head>

<body>

<h1>Total Sales Dashboard</h1>

<div class="container">

<div class="card">
<h2>Total Orders</h2>
<p><?php echo $orderData['totalOrders']; ?></p>
</div>

<div class="card">
<h2>Total Sales</h2>
<p>₹<?php echo $salesData['totalSales']; ?></p>
</div>

<div class="card">
<h2>Total GST</h2>
<p>₹<?php echo round($gstData['totalGST'],2); ?></p>
</div>

<div class="card">
<h2>Highest Bill</h2>
<p>₹<?php echo $maxData['highestBill']; ?></p>
</div>

</div>

</body>
</html>