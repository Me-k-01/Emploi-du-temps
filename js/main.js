const config = new Config('21L3-INF');
const table = new Table(document.getElementById('schedule'), config);
table.fill(matters);

window.addEventListener('resize', () => table.update());

document.getElementById('toggle-config').addEventListener('click', () => {
  const conf = document.getElementById('config');
  conf.className = conf.className === 'visible' ? '': 'visible';
});



config.update()
