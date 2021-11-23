<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Emploi du temps</title>
    <link rel="shortcut icon" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="/css/master.css">
    <link rel="stylesheet" type="text/css" href="/css/table.css">
    <link rel="stylesheet" type="text/css" href="/css/color.css">
    <link rel="stylesheet" type="text/css" href="/css/scrollbar.css">
    <link rel="stylesheet" type="text/css" href="/css/user-input.css">
    <script src="/js/preset.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/config.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/table.js" type="text/javascript" charset="utf-8" defer></script>
    <script src="/php/data.php" type="text/javascript" charset="utf-8" defer></script>
    <script src="/js/main.js" type="text/javascript" charset="utf-8" defer></script>
  </head>
  <body>
    <header>
      <h1>Emploi du temps</h1>
    </header>
    <main>
      <body>
        <table id="schedule"></table>
      </body>
      <div id="ui" class="hidden">
        <section>
          <h2>Inclure</h2>
            <ul>
              <li><label>Titre</label><label>Groupe</label></li>
            </ul>
          <form>
            <input id="include-titre" type="text" value="">
            <input id="include-group" type="text" value="">
          </form>
        </section>
        <section>
          <h2>
            Exclure
          </h2>
          <form>
            <input type="text" name="" value="">
          </form>
        </section>
      </div>
    </main>
  </body>
</html>
