

class Table{
  constructor(table, config) {
    this.table = table;
    this.config = config;
    this.matters = [];

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
        document.getElementById(this.makeId(d, h)).innerHTML = '';
      }
    }
  }

  update() {
    this.clear();
    this.fill();
  }

  formatToDOM({titre, salle}) { // Matter to DOM element
    const title = document.createElement('p');
    title.innerHTML = titre;
    title.classList.add('title');

    const room = document.createElement('p');
    room.classList.add('salle');
    room.innerHTML = salle;

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('cross');
    closeBtn.innerHTML = 'x';
    closeBtn.addEventListener('click', () => {
      this.config.addExclusion(titre);
      this.update();
    });

    const container = document.createElement('div');
    container.append(title, room, closeBtn);
    container.classList.add(this.getClass(salle));

    return container;
  }
  hourToAmount(dateStr) {
    var hms = dateStr.split(':');
    return ((+hms[0]) * 3600 + (+hms[1]) * 60 + (+hms[2])) / 3600;
  }
  adjustSize(div, {horaire, duree}) {
    // const size = getComputedStyle(div).getPropertyValue('--total-width');
    // console.log(horaire, duree);
    // console.log(div[this.var.getSize]);
    const size = (div[this.var.getSize]+14); // scrollbar: 10px, border; 4px
    div.style.transform = `translate${this.var.coord}(${size * this.hourToAmount('00'+horaire.substring(2))}px)`;
    div.style[this.var.size] = (size) * this.hourToAmount(duree) + 'px';
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
    document.getElementById(id).appendChild(div);
  }

  fill() {
    for (const mtr of this.matters) {
      // filtrage par nom de groupe suivant la configuration
      if (this.config.contains(mtr)) {
        const div = this.formatToDOM(mtr);
        this.set(this.makeId(mtr.jour, mtr.horaire), div);
        // console.log(mtr.titre);
        this.adjustSize(div, mtr);
      }
    }
  }
}
