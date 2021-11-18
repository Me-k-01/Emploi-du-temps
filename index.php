<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title>Emploi du temps</title>
    <link rel="shortcut icon" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="/css/master.css">
    <link rel="stylesheet" type="text/css" href="/css/table.css">
    <script type="text/javascript" async>
      const matters = [
        <?php
        require "php/creditential.php";
        try { // Create connection
          $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
        } catch (Exeption $err) {
          die("Connection failed: " . $err->getMessage());
        }
        $schedule = $conn->query('SELECT * FROM Schedule WHERE Schedule.filiere="21L3-INF" ORDER BY horaire');
        while ($data = $schedule->fetch(PDO::FETCH_ASSOC)) {
          echo "{";
          foreach ($data as $key => $value) {
            echo $key . ":" . json_encode($value), ", ";
          }
          echo "},";
        }
        ?>
      ];
    </script>
    <script src="/js/util.js" charset="utf-8" defer></script>
    <script src="/js/preset.js" charset="utf-8" defer></script>
    <script src="/js/config.js" charset="utf-8" defer></script>
    <script src="/js/table.js" charset="utf-8" defer></script>
    <script src="/js/main.js" charset="utf-8" defer></script>
  </head>
  <body>
    <header>
      <h1>Emploi du temps</h1>
    </header>
    <main>
      <table id="schedule"></table>
    </main>
  </body>
</html>
