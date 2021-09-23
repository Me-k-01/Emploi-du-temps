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
      <table id="schedule">
        <tr>
          <th scope="col">8</th>
          <th scope="col">9</th>
          <th scope="col">10</th>
          <th scope="col">11</th>
          <th scope="col">12</th>
        </tr>
        <tr>
          <th scope="row">Lundi</th>
        </tr>
        <tr>
          <th scope="row">Mardi</th>
          <td>test</td>
        </tr>
        <tr>

          <th scope="row">Mercredi</th>
        </tr>
      </table>
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
