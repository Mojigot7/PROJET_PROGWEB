<?php

// Connect to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve all Pokémon
$sql = "SELECT * FROM pokemon";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"] . "<br>";
        echo "Type: " . $row["type"] . "<br>";
        echo "Level: " . $row["level"] . "<br>";
        echo "<br>";
    }
} else {
    echo "No Pokémon found.";
}

// Close the database connection
$conn->close();

?>