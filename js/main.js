const config = new Config();
const table = new Table(document.getElementById('schedule'), config);
table.retrieve();
table.fill();
update();

function update() {
  config.updateFilieres();
  requestData(config.filieres, res => {
    table.matters = res;
    table.update();
    table.cache();
  });
}

function copy() {
  navigator.clipboard.writeText(config.export()).then(function() {
    /* presse-papiers modifié avec succès */
  }, function() {
    /* échec de l’écriture dans le presse-papiers */
  });
}


(() => {
  ///////////// Download / Upload /////////////
  document.getElementById('save').addEventListener('click', () => {
    config.save();
    table.cache();
  });
  document.getElementById('import').addEventListener('change', ev => {
    var reader = new FileReader();
    reader.onload = ev => config.importJSON(ev.target.result);
    reader.readAsText(ev.target.files[0]);
  });
  ///////////// Window resize event /////////////
  window.addEventListener('resize', () => table.update());
  const conf = document.getElementById('config');
  ///////////// Show and hide config menu /////////////
  document.getElementById('toggle-config').addEventListener('click', () => {
    conf.className = conf.className === 'visible' ? '': 'visible';
  });
  // document.addEventListener('click', function(ev) {
  //   const isInside = conf.contains(ev.target);
  //   console.log(ev.target);
  //   if (! isInside) {
  //     document.getElementById('config').className = '';
  //   }
  // });
  ///////////// Add to config button /////////////
  document.getElementById('add-include-btn').addEventListener('click', function (ev) {
    const [titleInput, groupInput] = this.parentNode.getElementsByTagName('input');
    config.inputInclude(titleInput, groupInput);
  });
  document.getElementById('add-exclude-btn').addEventListener('click', function (ev) {
    const titleInput = this.parentNode.getElementsByTagName('input')[0];
    config.inputExclude(titleInput);
  });
})();
