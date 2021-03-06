class Config {
  constructor() {
    this.name = 'config';
    this.load();
    ///////////// Include Input /////////////
    this.includeListDOM = document.getElementById('include');
    this.excludeListDOM = document.getElementById('exclude');
    this.addIncludeDOM  = document.getElementById('add-include');
    this.addExcludeDOM  = document.getElementById('add-exclude');
    this.filieresInputDOM  = document.querySelectorAll('#filiere input');
    this.setUpDOM();
  }

  makeInput(title, group) {
    const li = document.createElement('li');
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.value = title;
    li.appendChild(inputTitle);
    const delBtn = document.createElement('button');
    const delIcon = document.createElement('i');
    delIcon.className = 'fas fa-trash';
    delBtn.appendChild(delIcon);

    if (group) {
      const inputGroup = document.createElement('input');
      inputGroup.setAttribute('type', 'text');
      inputGroup.name = title;
      inputGroup.value = group;
      const self = this;
      inputGroup.addEventListener('input', function (ev) {
        this.value = ev.data.toUpperCase(); // A group is only one character
        self.include[title] = this.value; // Update config
        table.update(); // Update table
      });
      li.appendChild(inputGroup);
      delBtn.addEventListener('click', ev => {
        delete this.include[title];
        table.update();
        li.remove();
      });
    } else {
      delBtn.addEventListener('click', ev => {
        delete this.exclude[title];
        table.update();
        li.remove();
      });
    }
    li.appendChild(delBtn);
    return li;
  }

  addInclusion(title, group) {
    this.include[title] = group;
    this.includeListDOM.insertBefore(
      this.makeInput(title, this.include[title]),
      this.addIncludeDOM
    );
    table.update();
  }
  inputInclude(titleInput, groupInput) {
    const [title, group] = [titleInput.value, groupInput.value];
    // If the matter is already included
    if (this.include[title]) {
      const liOriginal = document.querySelector(`input[name='${title}']`).parentNode; // Select original include input li
      liOriginal.children[1].value = group; // Update its group
      titleInput.value = '';
      groupInput.value = '';
      table.update();
      return;
    }
    // If the title and group is valid
    if (title && group) {
      this.addInclusion(title, group);
      titleInput.value = '';
      groupInput.value = '';
      return;
    }
  }
  addExclusion(title) {
    this.exclude[title] = true;
    this.excludeListDOM.insertBefore(
      this.makeInput(title),
      this.addExcludeDOM
    );
    table.update();
  }
  inputExclude(titleInput) {
    const title = titleInput.value;
    // If the title is valid
    if (title && ! this.exclude[title]) {
      this.addExclusion(title);
      titleInput.value = '';
      return;
    }
  }

  setUpDOM() {
    const self = this;
    document.querySelector('#add-include input:nth-child(2)').addEventListener('input', function (ev) {
      this.value = ev.data.toUpperCase(); // A group is only one character
      const title = this.parentNode.firstChild.value;
      self.include[title] = this.value; // Update config
      table.update(); // Update table
    });
    this.updateDOM();
  }
  updateFilieres() {
    this.filieres = [];
    for (const filiere of this.filieresInputDOM) {
      if (filiere.checked) {
        this.filieres.push(filiere.id);
      }
    }
  }
  clearDOM() {
    for (const filiere of this.filieresInputDOM) {
      filiere.checked = false;
    }
    let p = this.addIncludeDOM.parentNode;
    p.innerHTML = '';
    p.appendChild(this.addIncludeDOM);
    p = this.addExcludeDOM.parentNode;
    p.innerHTML = '';
    p.appendChild(this.addExcludeDOM);
  }
  updateDOM() {
    this.clearDOM();
    ///////////// Iterate over saved config /////////////
    for (const filiere of this.filieres) {
      document.getElementById(filiere).checked = true;
    }
    for (const title in this.include) {
      this.includeListDOM.insertBefore(this.makeInput(title, this.include[title]), this.addIncludeDOM);
    }
    for (const title in this.exclude) {
      this.excludeListDOM.insertBefore(this.makeInput(title), this.addExcludeDOM);
    }
  }

  load() {
    const data = JSON.parse(localStorage.getItem(this.name));
    this.importConfig(data || presets);
  }
  save() {
    localStorage.setItem(this.name, this.formatToJSON());
  }
  export() {
    let blob = new Blob([this.formatToJSON()], {type: 'text/json'}),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a');

    a.download = this.name+'.json';
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }
  formatToJSON() {
    return JSON.stringify({
      filieres: this.filieres,
      include: this.include,
      exclude: Object.keys(this.exclude)
    });
  }
  importJSON(str) {
    try {
      const data = JSON.parse(str);
      if (! data.include || ! data.exclude || ! data.filieres) {
        console.error('Configuration invalide');
        return;
      }
      this.importConfig(data);
    } catch (err) {
      console.error('Configuration invalide');
    }
    this.updateDOM();
    table.update();
    requestData(this.filieres, res => {
      table.matters = res;
      table.update();
    });
  }
  importConfig({filieres, include, exclude}) {
    this.filieres = filieres;
    this.include = include;
    this.exclude = {};
    for (const matter of exclude) {
      this.exclude[matter] = true;
    }
  }

  contains({titre, groupe}) {
    return (this.include[titre] === groupe || groupe === null) && ! this.exclude[titre];
  }

}
