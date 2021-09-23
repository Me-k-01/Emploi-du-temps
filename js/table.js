const doc = document;

class Table{
  constructor(table) {
    this.table = table;
    this.heureMin = 8;
    this.heureMax = 17;
    this.setColTitle();
    this.createRow();
  }

  setColTitle() {
    const row = this.table.insertRow(0);
    row.insertCell();
    for (let h = this.heureMin; h <= this.heureMax; h++) {
      row.insertCell(-1).outerHTML = `<th scope="col">${h}h</th>`;
    }
  }

  createRow() {
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    for (const day of days) {
      const row = this.table.insertRow(-1);
      const d = day.toLowerCase();
      row.insertCell(0).outerHTML = `<th scope="row" id="${d}">${day}</th>`;
      for (let h = this.heureMin; h <= this.heureMax; h++) {
        row.insertCell(-1).outerHTML = `<td scope="row" id="${d}-${h}"></td>`;
      }
    }
  }
  getId({date, horaire}) {
    return date.toLowerCase() + " " + horaire.split(':')[1];
  }
  set(id, div) {
    console.log(id);
    doc.getElementById(id).appendChild(div);
  }

  static formatDOM({titre, salle}) {
    const container = doc.createElement('div');
    container.append(doc.createTextNode(titre), doc.createTextNode(salle))
    return container;
  }

  fill(matters, groupFilter) {
    for (const matter of matters) {
      // if (matter.groupe == groupFilter.titre) {
        this.set(this.getId(matter), Table.formatDOM(matter));
      // }
    }
  }
}
