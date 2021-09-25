const doc = document;

class Table{
  static formatDOM({titre, salle}, color) { // Matter to DOM element
    const container = doc.createElement('div');
    const title = doc.createElement('p');
    title.innerHTML = titre;
    const place = doc.createElement('p');
    place.innerHTML = salle;

    container.append(title, place);
    container.style.backgroundColor = color;
    return container;
  }

  constructor(table) {
    this.table = table;
    this.heureMin = 8;
    this.heureMax = 18;
    this.create();
  }

  create() {
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    // Lignes des noms de jours
    const titleRow = this.table.insertRow(0);
    titleRow.insertCell(0).outerHTML = `<th scope="col"></th>`;
    for (const day of days) {
      titleRow.insertCell(-1).outerHTML = `<th scope="col" id="${day.toLowerCase()}">${day}</th>`;
    }

    for (let h = this.heureMin; h <= this.heureMax; h++) {
      const row = this.table.insertRow(-1);
      // Colone des heures
      row.insertCell(0).outerHTML = `<th scope="row" id="${h}">${h}</th>`;
      // Remplissage
      for (const day of days) {
        row.insertCell(-1).outerHTML = `<td scope="row" id="${day.toLowerCase()}-${h}"></td>`;
      }
    }
  }

  static getId({jour, horaire}) {
    const h = parseInt(horaire.substring(0, 2));
    return jour.toLowerCase() + "-" + h;
  }

  set(id, div) {
    doc.getElementById(id).appendChild(div);
  }

  fill(matters, config) {
    for (const matter of matters) {
      // filtrage par nom de groupe suivant la configuration
      if (config.contains(matter.titre, matter.groupe)) {
        this.set(Table.getId(matter), Table.formatDOM(matter, config.getColor(matter.titre)));
      }
    }
  }
}
