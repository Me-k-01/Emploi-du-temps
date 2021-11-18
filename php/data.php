let matters = <?php
  require "creditential.php";

  try { // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  } catch (Exeption $err) {
    die("Connection failed: " . $err->getMessage());
  }
  $results = $conn->query('SELECT * FROM Schedule WHERE Schedule.filiere="21L3-INF" ORDER BY horaire')
    ->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($results);
?>;
