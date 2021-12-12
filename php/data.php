<?php
  header("Content-Type: application/json");
  //////////// Test parameters ////////////
  if (! isset($_POST['query'])) {
    http_response_code(405);
    die ('POST parameter undefined: query');
  }

  //////////// Connect to database ////////////
  require "connect.php";

  //////////// Query select ////////////
  $arr = json_decode($_POST['query']);
  $placeholder  = str_repeat('?,', count($arr) - 1) . '?';
  $sql = "SELECT * FROM Schedule WHERE filiere IN ($placeholder) ORDER BY horaire";

  $stm = $conn->prepare($sql);
  $stm->execute($arr);
  $res = $stm->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($res);
?>
