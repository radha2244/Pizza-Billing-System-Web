<?php

$conn = new mysqli(
    "localhost",
    "root",
    "YOUR_PASSWORD",
    "pizzapoint"
);

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

?>