<?php require_once 'header.php' ?>


  <body>
    <header>test</header>
    <?php
    $servername = "51.77.202.155:3306";
    $username = "u48541_IxLPYgYqNg";
    $password = "E^3Jvy=ShXz!1u1CkB9y2Y.B";
use PDO;
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=Test", $username, $password);

    // Check connection
    if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
    ?>
    <main>

    </main>
  </body>
</html>
