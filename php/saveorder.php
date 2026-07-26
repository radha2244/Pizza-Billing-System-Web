<?php

include "db.php";

$customerName = $_POST["customerName"];
$phone = $_POST["phoneNumber"];

$pizzaType = $_POST["pizzaType"];
$category = $_POST["category"];

$cheese = isset($_POST["cheese"]) ? "Yes" : "No";
$topping = isset($_POST["topping"]) ? "Yes" : "No";
$takeaway = isset($_POST["takeaway"]) ? "Yes" : "No";

$water = $_POST["water"];
$ketchup = $_POST["ketchup"];
$softdrink = $_POST["softdrink"];

$subtotal = $_POST["subtotal"];
$gst = $_POST["gst"];
$roundoff = $_POST["roundoff"];
$total = $_POST["total"];
$order_date = date("Y-m-d");
$sql = "INSERT INTO orders
(customer_name, phone, pizza_type, category, cheese, topping, takeaway,
water, ketchup, softdrink, subtotal, gst, roundoff, total, order_date)

VALUES
('$customerName',
'$phone',
'$pizzaType',
'$category',
'$cheese',
'$topping',
'$takeaway',
'$water',
'$ketchup',
'$softdrink',
'$subtotal',
'$gst',
'$roundoff',
'$total',
'$order_date')";
if($conn->query($sql))
{
    header("Location: ../html/bill.html");
    exit();
}
else
{
    echo "Error : " . $conn->error;
}
$conn->close();
?>
