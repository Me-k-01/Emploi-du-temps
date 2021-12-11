class Config {
  constructor() {
    this.name = 'config';
    this.load();
    ///////////// Include Input /////////////
    this.includeListDOM = document.getElementById('include');
    this.excludeListDOM = document.getElementById('exclude');
    this.addIncludeDOM = document.getElementById('add-include');
    this.addExcludeDOM = document.getElementById('add-exclude');
    this.setUpDOM();
  }

  makeInput(title, group) {
    const li = document.createElement('li');

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.value = title;
    li.appendChild(inputTitle);



    const addBtn = document.createElement('button');
    const addIcon = document.createElement('i');
    addIcon.className = 'fas fa-trash';
    addBtn.appendChild(addIcon);


    if (group) {
      const inputGroup = document.createElement('input');
      inputGroup.setAttribute('type', 'text');
      inputGroup.value = group;
      const self = this;
      inputGroup.addEventListener('input', function (ev) {
        this.value = ev.data.toUpperCase(); // A group is only one character
        self.include[title] = this.value; // Update config
        table.update(); // Update table
      });
      li.appendChild(inputGroup);
      addBtn.addEventListener('click', ev => {
        delete this.include[title];
        table.update();
        li.remove();
      });
    } else {
      addBtn.addEventListener('click', ev => {
        delete this.exclude[title];
        table.update();
        li.remove();
      });
    }
    li.appendChild(addBtn);
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
    if (title) {
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
    const data = localStorage.getItem(this.name);
    if (! data) {
      this.importConfig(presets);
    } else {
      this.include = data.include;
      this.exclude = data.exclude;
    }
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.export()))
  }

  export() {
    return {
      filieres: this.filieres,
      include: this.include,
      exclude: this.exclude
    };
  }
  importJSON(str) {
    try {
      const data = JSON.parse(str);
      if (! data.include || ! data.exclude || ! data.filieres) {
        console.error('Configuration invalide');
        return;
      }
      importConfig(data);
    } catch (err) {
      console.error('Configuration invalide');
    }
  }
  importConfig({include, exclude, filieres}) {
    this.include = include;
    this.exclude = exclude;
    this.filieres = filieres;
  }

  contains({titre, groupe}) {
    return (this.include[titre] === groupe || groupe === null) && ! this.exclude[titre];
  }

}
