class Config {
  constructor() {
    this.name = "config";
    this.load();
    //this.filieresInput = document.querySelectorAll('#filiere input[type="checkbox"]');
    this.setUpDOM();

  }
  addInclusion(title, group) {
    this.include[title] = group;
  }
  addExclusion(title) {
    this.exclude[title] = true;
  }

  makeInput(title, group) {
    const li = document.createElement('li');

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute("type", "text");
    inputTitle.value = title;
    li.appendChild(inputTitle);
    if (group) {
      const inputGroup = document.createElement('input');
      inputGroup.setAttribute("type", "text");
      inputGroup.value = group;
      li.appendChild(inputGroup);
    }

    const addBtn = document.createElement('button');
    const addIcon = document.createElement('i');
    addIcon.className = 'fas fa-trash';
    addBtn.appendChild(addIcon);
    addBtn.addEventListener('click', ev => {
      li.remove();
    })
    li.appendChild(addBtn);

    return li;
  }

  setUpDOM() {
    ///////////// Include Input /////////////


    ///////////// Iterate over saved config /////////////
    for (const filiere of this.filieres) {
      document.getElementById(filiere).checked = true;
    }


    this.includeList = document.getElementById("include");
    for (const title in this.include) {
      const li = this.makeInput(title, this.include[title]);
      this.includeList.appendChild(li);
    }
    this.excludeList = document.getElementById("exclude");
    for (const title in this.exclude) {
      const li = this.makeInput(title);
      this.excludeList.appendChild(li);
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
