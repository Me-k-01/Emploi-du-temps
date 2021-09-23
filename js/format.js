function createTable() {
  const table = document.getElementById('schedule');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < 7; i++) {
    for (let j = 0; j < 10; j++) { // 8-17 = 9
      const cell = document.createElement('td');
      // cell.textContent = "_";
      console.log(cell);
      rows[i].append(cell);
    }
  }
}
createTable();
