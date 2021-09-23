class Table{
  constructor(table) {
    this.table = table;
    this.heureMin = 8;
    this.setColTitle();
    this.fillCell();
  }

  setColTitle() {
    const row = this.table.insertRow(0);
    row.insertCell();
    for (let i = 0; i <= this.heureMin; i++) {
      row.insertCell(-1).outerHTML = `<th scope="col">${i+this.heureMin}</th>`;
    }
  }

  fillCell() {
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    for (const day of days) {
      const row = this.table.insertRow(-1);
      row.insertCell(0).outerHTML = `<th scope="row" id="${day.toLowerCase()}">${day}</th>`;
      for (let i = 0; i <= this.heureMin; i++) {
        row.insertCell(-1).innerHTML = '';
      }
    }
  }
  getCell(i, j) {

  }

  fill(matters) {

  }
}
