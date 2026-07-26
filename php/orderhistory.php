<?php
include "db.php";

$result = mysqli_query($conn, "SELECT * FROM orders ORDER BY bill_no DESC");
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Order History</title>

    <style>
        body{
            font-family: Arial;
            background:#f5f5f5;
            margin:30px;
        }

        h2{
            text-align:center;
        }

        table{
            width:100%;
            border-collapse:collapse;
            background:white;
        }

        th,td{
            border:1px solid #ccc;
            padding:10px;
            text-align:center;
        }

        th{
            background:#ff9800;
            color:white;
        }

        tr:nth-child(even){
            background:#f2f2f2;
        }
    </style>
</head>

<body>

<h2>Order History</h2>

<table>

<tr>
<th>Bill No</th>
<th>Date</th>
<th>Customer</th>
<th>Phone</th>
<th>Pizza</th>
<th>Category</th>
<th>Total</th>
</tr>

<?php
while($row=mysqli_fetch_assoc($result))
{
?>
<tr>
<td><?php echo $row['bill_no']; ?></td>
<td><?php echo date("d-m-Y", strtotime($row['order_date'])); ?></td>
<td><?php echo $row['customer_name']; ?></td>
<td><?php echo $row['phone']; ?></td>
<td><?php echo $row['pizza_type']; ?></td>
<td><?php echo $row['category']; ?></td>
<td>₹<?php echo $row['total']; ?></td>
</tr>

<?php
}
?>

</table>

</body>
</html>