const doc = document;

class Table{
  formatToDOM({titre, salle}) { // Matter to DOM element
    const title = doc.createElement('p');
    title.innerHTML = titre;
    title.classList.add('title');

    const room = doc.createElement('p');
    room.classList.add('salle');
    room.innerHTML = salle;

    const container = doc.createElement('div');
    container.append(title, room);
    container.classList.add(this.getClass(salle));

    return container;
  }

  constructor(table) {
    this.table = table;
    this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    this.hours = [];
    const heureMin = 8, heureMax = 19;
    for (let h = heureMin; h < heureMax; h++) {
      this.hours.push(`${h}h`);
    }
    this.isReverse = false;
    if (this.isReverse){
      this.create(this.hours, this.days);
      table.classList.add('reverse');
    } else {
      this.create(this.days, this.hours);
      table.classList.remove('reverse');
    }
  }

  create(horizontalHeader, verticalHeader) {
    // Lignes des noms de jours
    const titleRow = this.table.insertRow(0);
    titleRow.insertCell(0).outerHTML = `<th scope="col"></th>`;
    for (const h of horizontalHeader) {
      titleRow.insertCell(-1).outerHTML = `<th scope="col" id="${h.toLowerCase()}">${h}</th>`;
    }
    let i = 0, j = 0
    for (const v of verticalHeader) {
      const row = this.table.insertRow(-1);
      // Colone des heures
      row.insertCell(0).outerHTML = `<th scope="row" id="${v.toLowerCase()}">${v}</th>`;
      // Remplissage
      for (const h of horizontalHeader) {
        row.insertCell(-1).outerHTML = `<td><div id="${this.isReverse? this.makeId(v,h): this.makeId(h,v)}"></div></td>`;
      }
    }
  }

  clear() {
    for (const d of this.days) {
      for (const h of this.hours) {
        doc.getElementById(this.makeId(d, h)).innerHTML = '';
      }
    }
  }

  getClass(salle) {
    const salleArray = salle.split(' ');
    if (salleArray.length > 0) {
      let classStr = salleArray.pop().substring(0, 2);
      for (const c of salleArray) {
        if (! c.startsWith(classStr)) {
          return 'multiple';
        }
      }
      return classStr;
    }
  }

  makeId(day, hour) {
    return day.toLowerCase() + '-' +  parseInt(hour.substring(0, 2));
  }

  set(id, div) {
    doc.getElementById(id).appendChild(div);
  }

  fill(matters, config) {
    for (const mtr of matters) {
      // filtrage par nom de groupe suivant la configuration
      if (config.contains(mtr)) {
        this.set(this.makeId(mtr.jour, mtr.horaire), this.formatToDOM(mtr));
      }
    }
  }
}
