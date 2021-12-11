const config = new Config();
const table = new Table(document.getElementById('schedule'), config);

requestData(config.filieres, res => {
  table.matters = res;
  table.fill();
})

window.addEventListener('resize', () => table.update());

document.getElementById('toggle-config').addEventListener('click', () => {
  const conf = document.getElementById('config');
  conf.className = conf.className === 'visible' ? '': 'visible';
});

document.getElementById('add-include-btn').addEventListener('click', function (ev) {
  const inputs = this.parentNode.getElementsByTagName('input');
  console.log(inputs[0].value, inputs[1].value);
});
document.getElementById('add-exclude-btn').addEventListener('click', function (ev) {
  const inputs = this.parentNode.getElementsByTagName('exclude');
  console.log(inputs[0].value);
});
