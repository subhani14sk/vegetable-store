<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "vegetable_store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT id, name, description, price, image FROM products");

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

$conn->close();
?>
