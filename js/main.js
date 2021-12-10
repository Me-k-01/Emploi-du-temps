const config = new Config();
const table = new Table(document.getElementById('schedule'), config);
requestData(config.filieres, (res) => {
  table.matters = res;
  table.fill();
})

window.addEventListener('resize', () => table.update());

document.getElementById('toggle-config').addEventListener('click', () => {
  const conf = document.getElementById('config');
  conf.className = conf.className === 'visible' ? '': 'visible';
});



// config.update()
