<?php
  //////////// Test parameters ////////////
  if (! isset($_POST['uid'])) {
    die('POST parameter undefined: query');
  }

  //////////// Connect to database ////////////
  require "creditential.php";
  try { // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  } catch (Exeption $err) {
    die("Connection failed: " . $err->getMessage());
  }

  //////////// Query select ////////////
  // $sql = "SELECT * FROM Schedule ORDER BY horaire WHERE filiere IN (" . mysql_real_escape_string() . ")";  // WHERE Schedule.filiere="21L3-INF"
  // $results = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);
  //////////// Convert to JSON ////////////
  // header("Content-Type: application/json");
  header("Content-Type: application/text");
  // echo json_encode($results);
  echo $_POST['query'];
?>
