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
    <script src="https://kit.fontawesome.com/da84674338.js" crossorigin="anonymous"></script>
    <script src="/js/preset.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/config.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/table.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/php/data.php" type="text/javascript" charset="utf-8" defer></script>
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
          <h2>Inclure</h2>
          <ul>
            <li>
              <input class="include-title" type="text" value="">
              <input class="include-group" type="text" value="">
              <button class="del" type="button" name="button">
                <i class="fas fa-trash"></i>
              </button>
            </li>
            <li>
              <input class="include-title" type="text" value="">
              <input class="include-group" type="text" value="">
              <button id="add" type="button" name="button">
                <i class="fas fa-plus"></i>
              </button>
              </li>
          </ul>
        </section>
        <section>
          <h2>Exclure</h2>
          <ul>
            <li>
              <input class="exclude-title" type="text" value="">
              <button class="del" type="button" name="button">
                <i class="fas fa-trash"></i>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </body>
</html>
