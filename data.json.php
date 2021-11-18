<?php

  require "creditential.php";
  try { // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  } catch (Exeption $err) {
    die("Connection failed: " . $err->getMessage());
  }
  $schedule = $conn->query('SELECT * FROM Schedule WHERE Schedule.filiere="21L3-INF" ORDER BY horaire');
  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo $json;

?>
