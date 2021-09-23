<?php require 'head.php' ?>

  <body>
    <script src="/js/format.js" charset="utf-8" defer></script>
    <header>
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
      <table id="schedule">
        <tr><td></td>
          <th scope="col">8</th>
          <th scope="col">9</th>
          <th scope="col">10</th>
          <th scope="col">11</th>
          <th scope="col">12</th>
          <th scope="col">13</th>
          <th scope="col">14</th>
          <th scope="col">15</th>
          <th scope="col">16</th>
          <th scope="col">17</th>
        </tr>
        <tr><th scope="row">Lundi</th></tr>
        <tr><th scope="row">Mardi</th></tr>
        <tr><th scope="row">Mercredi</th></tr>
        <tr><th scope="row">Jeudi</th></tr>
        <tr><th scope="row">Vendredi</th></tr>
        <tr><th scope="row">Samedi</th></tr>
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
    </main>
  </body>
</html>
