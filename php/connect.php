<?php
  require "credential.php";
  try { // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  } catch (Exeption $err) {
    http_response_code(405);
    die ("Connection failed: " . $err->getMessage());
  }
?>
