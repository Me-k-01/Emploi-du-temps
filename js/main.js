const config = new Config();
const table = new Table(document.getElementById('schedule'), config);

requestData(config.filieres, res => {
  table.matters = res;
  table.fill();
})

///////////// Window resize event /////////////
window.addEventListener('resize', () => table.update());

///////////// Show and hide config menu ///////////// 
document.getElementById('toggle-config').addEventListener('click', () => {
  const conf = document.getElementById('config');
  conf.className = conf.className === 'visible' ? '': 'visible';
});
///////////// Add to config button /////////////
document.getElementById('add-include-btn').addEventListener('click', function (ev) {
  const [titleInput, groupInput] = this.parentNode.getElementsByTagName('input');
  config.inputInclude(titleInput, groupInput);
});
document.getElementById('add-exclude-btn').addEventListener('click', function (ev) {
  const titleInput = this.parentNode.getElementsByTagName('input')[0];
  config.inputExclude(titleInput);
});
