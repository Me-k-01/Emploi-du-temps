<?php require 'head.php' ?>

  <body>
    <header>
    </header>
    <?php
      require "creditential.php";
      // Create connection
      try {
        $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
      } catch (Exeption $err) {
        die("Connection failed: " . $err->getMessage());
      }

      $schedule = $conn->query('SELECT * FROM `21L3-INF` ORDER BY `horaire`');
    ?>
    <main>
      <script type="text/javascript">
        matters = [
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
      <table>
        <tbody>
        </tbody>
      </table>
    </main>
  </body>
</html>
