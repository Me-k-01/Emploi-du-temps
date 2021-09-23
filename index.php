<?php require 'head.php' ?>

  <body>
    <header>
      <script src="/js/table.js" charset="utf-8" defer></script>
      <script src="/js/main.js" charset="utf-8" defer></script>
    </header>
    <?php
      require "creditential.php";
      try { // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
      } catch (Exeption $err) {
        die("Connection failed: " . $err->getMessage());
      }
      $schedule = $conn->query('SELECT * FROM `21L3-INF` ORDER BY `horaire`');
    ?>
    <main>
      <h1>Emploi du temps</h1>
      <table id="schedule"></table>

      <script type="text/javascript">
        const matters = [
          <?php
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
    </main>
  </body>
</html>
