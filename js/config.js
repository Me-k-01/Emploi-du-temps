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

  setUpDOM() {
    ///////////// Include Input /////////////
    this.includeDOM = document.createElement('li');

    const inputTitle = document.createElement('input');
    inputTitle.className = "include-title";
    this.includeDOM.appendChild(inputTitle);

    const inputGroup = document.createElement('input');
    inputGroup.className = "include-group";
    this.includeDOM.appendChild(inputGroup);

    const addBtn = document.createElement('button');
    addBtn.id = "add";
    const addIcon = document.createElement('i');
    addIcon.className = "fas fa-plus";
    addBtn.appendChild(addIcon)
    this.includeDOM.appendChild(addBtn);


    for (const filiere of this.filieres) {
      document.getElementById(filiere).checked = true;
    }


    this.includeList = document.getElementById("include");
    for (const [include, group] in Object.entries(this.include)) {
      this.includeList.appendChild(this.includeDOM);
    }
    this.excludeList = document.getElementById("exclude");
    for (const exclude in this.exclude) {

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
