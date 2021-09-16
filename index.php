<?php require_once 'header.php' ?>

  <body>
    <header>test</header>
    <?php
    $servername = "51.77.202.155";
    $username = "u48541_IxLPYgYqNg";
    $password = "E^3Jvy=ShXz!1u1CkB9y2Y.B";
    // Create connection
    try {
      $conn = new PDO("mysql:host=$servername;dbname=s48541_Test", $username, $password);
    } catch (Exeption $e) {
     die("Connection failed: " . $e->getMessage());
    }
    echo "Connected successfully";
    ?>
    <main>

    </main>
  </body>
</html>
