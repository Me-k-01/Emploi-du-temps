<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Emploi du temps</title>
    <!-- Stylesheet -->
    <link rel="shortcut icon" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="/css/master.css">
    <link rel="stylesheet" type="text/css" href="/css/table.css">
    <link rel="stylesheet" type="text/css" href="/css/color.css">
    <link rel="stylesheet" type="text/css" href="/css/scrollbar.css">
    <link rel="stylesheet" type="text/css" href="/css/configurator.css">
    <!-- Scripts -->
    <script src="https://kit.fontawesome.com/da84674338.js" crossorigin="anonymous" async></script>
    <script src="/js/request.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/table.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/preset.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/config.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/main.js" type="text/javascript" charset="utf-8" defer></script>
  </head>
  <body>
    <main>
      <body>
        <button id="toggle-config" type="button" name="button"><i class="fas fa-cog"></i></button>
        <table id="schedule"></table>
      </body>
      <div id="config" >
        <section>
          <h2>Filières</h2>
          <form id="filiere" action="#">
            <?php
              require "php/connect.php";
              $stmt = $conn->query('SELECT * FROM Filiere');
              while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $f = $row['id'];
                echo "<div><input type='checkbox' onchange='update()' autocomplete='off' id='$f'/>
                  <label for='$f'>".$row['nom']."</label></div>";
              }
            ?>
          </form>
        </section>
        <section>
          <h2>Groupes à inclure</h2>
          <ul id="include">
            <li id="add-include">
              <input type="text" value="" required/>
              <input type="text" value="" required/>
              <button id="add-include-btn" class="add" type="button" name="button">
                <i class="fas fa-plus"></i>
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Matière à exclure</h2>
          <ul id="exclude">
            <li id="add-exclude">
              <input class="exclude-title" type="text" value="" required/>
              <button id="add-exclude-btn" class="add" type="button" name="button">
                <i class="fas fa-plus"></i>
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Importer ou exporter</h2>
          <div>
            <input id="import" type="file" />
            <button type="button" name="button" onclick="config.export()"><i class="fas fa-file-export"></i></button>
          </div>
          <button id="save" type="button" name="button">Save</button>
        </section>
      </div>
    </main>
  </body>
</html>
