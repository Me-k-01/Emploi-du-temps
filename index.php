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
          <h2>Filière</h2>
          <form id="filiere" action="#">
            <div>
              <input type="checkbox" id="21L3-INF" value="21L3-INF"/>
              <label for="21L3-INF">L3 Info</label>
            </div>
            <div>
              <input type="checkbox" id="21L3-MAT" value="21L3-MAT"/>
              <label for="21L3-MAT">L3 Math</label>
            </div>
          </form>
        </section>
        <section>
          <h2>Inclure groupe</h2>
          <ul id="include">
            <li id="add-include">
              <input type="text" value="">
              <input type="text" value="">
              <button class="add" type="button" name="button">
                <i class="fas fa-plus"></i>
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Exclure</h2>
          <ul id="exclude">
            <li id="add-exclude">
              <input class="exclude-title" type="text" value="">
              <button class="add" type="button" name="button">
                <i class="fas fa-plus"></i>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </body>
</html>
