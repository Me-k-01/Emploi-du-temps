<?php require_once 'header.php' ?>

  <body>
    <header>test</header>
    <?php
    require "creditential.php";
    // Create connection
    try {
      $conn = new PDO("mysql:host=$servername;dbname=s48541_Test", $username, $password);
    } catch (Exeption $err) {
     die("Connection failed: " . $err->getMessage());
    }
    echo "Connected successfully";

    $res = $conn->query('SELECT * FROM `21L3-INF`');
    while ($donnees = $res->fetch()) {
      echo $donnees['matiere'];
    }
    ?>
    <main>

    </main>
  </body>
</html>
