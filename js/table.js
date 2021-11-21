const doc = document;

class Table{
  constructor(table) {
    this.table = table;
    this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    this.hours = [];
    const heureMin = 8, heureMax = 19;
    for (let h = heureMin; h < heureMax; h++) {
      this.hours.push(`${h}h`);
      // this.hours.push(`${h}h30`);
    }
    this.isReverse = false;
    this.var = {};
    if (this.isReverse){
      this.create(this.hours, this.days);
      table.classList.add('reverse');
      this.var.size = 'width';
      this.var.getSize = 'clientWidth';
      this.var.pos = 'left';
      this.var.coord = 'X';
    } else {
      this.create(this.days, this.hours);
      table.classList.remove('reverse');
      this.var.size = 'height';
      this.var.getSize = 'clientHeight';
      this.var.pos = 'top';
      this.var.coord = 'Y';
    }
  }

  create(horizontalHeader, verticalHeader) {
    // Lignes des noms de jours
    const titleRow = this.table.insertRow(0);
    titleRow.id = 'header';
    titleRow.insertCell(0).outerHTML = `<th scope="col"></th>`;
    for (const h of horizontalHeader) {
      titleRow.insertCell(-1).outerHTML = `<th scope="col" id="${h.toLowerCase()}" class="top-header">${h}</th>`;
    }
    let i = 0, j = 0
    for (const v of verticalHeader) {
      const row = this.table.insertRow(-1);
      // Colone des heures
      row.insertCell(0).outerHTML = `<th scope="row" id="${v.toLowerCase()}" class="left-header">${v}</th>`;
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

  formatToDOM(matter) { // Matter to DOM element
    const title = doc.createElement('p');
    title.innerHTML = matter.titre;
    title.classList.add('title');

    const room = doc.createElement('p');
    room.classList.add('salle');
    room.innerHTML = matter.salle;

    const container = doc.createElement('div');
    container.append(title, room);
    container.classList.add(this.getClass(matter.salle));
    return container;
  }
  hourToAmount(dateStr) {
    var hms = dateStr.split(':');
    return ((+hms[0]) * 3600 + (+hms[1]) * 60 + (+hms[2])) / 3600;
  }
  adjustSize(div, {horaire, duree}) {
    // const size = getComputedStyle(div).getPropertyValue('--total-width');
    div.style.transform = `translate${this.var.coord}(${div[this.var.getSize] * this.hourToAmount('00'+horaire.substring(2))}px)`;
    div.style[this.var.size] = div[this.var.getSize] * this.hourToAmount(duree) + 'px';
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
        const div = this.formatToDOM(mtr);
        this.set(this.makeId(mtr.jour, mtr.horaire), div);
        this.adjustSize(div, mtr);
      }
    }
  }
}
