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
      <ul>
        <?php
          function divify($data) {
            $div = '';
            foreach ($data as $key => $value) {
              $div .= "<div class='$key'>$value</div>";
            }
            return $div;
          }
          while ($data = $schedule->fetch(PDO::FETCH_ASSOC)) {
            echo "<li>" . divify($data) . "</li>";
          }
        ?>
      </ul>
      <table>
        <tbody>
        </tbody>
      </table>
    </main>
  </body>
</html>
