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
      <div id="ui">
        <section>
          <form id="include-input" action="#" method="post">
            <label>
              Inclure:
              <input type="text" name="" value="">
            </label>
          </form>
        </section>
        <section>
          <form id="exclude-input" action="#" method="post">
            <label>
              Exclure:
              <input type="text" name="" value="">
            </label>
          </form>
        </section>
      </div>
    </main>
  </body>
</html>
