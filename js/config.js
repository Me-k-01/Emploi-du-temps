class Config {
  constructor(name) {
    this.include = name;
    this.load();
    this.filieres = document.getElementById('filiere').elements;
  }
  addInclusion(title, group) {
    this.include[title] = group;
  }
  addExclusion(title) {
    this.exclude[title] = true;
  }

  load() {
    const data = localStorage.getItem(name);
    if (! data) {
      this.importConfig(presets);
    } else {
      this.include = data.include;
      this.exclude = data.exclude;
    }
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.map))
  };

  export() {
    return {
      include: this.include,
      exclude: this.exclude
    };
  }
  importJSON(str) {
    try {
      const data = JSON.parse(str);
      if (! data.include || ! data.exclude) {
        // Err
      }
      importConfig(data);
    } catch (err) {
      // Err
    }
  }
  importConfig({include, exclude}) {
    this.include = include;
    this.exclude = exclude;
  }

  contains({titre, groupe}) {
    return (this.include[titre] === groupe || groupe === null) && ! this.exclude[titre];
  }

  update() {
    for (const input in this.filieres) {
      if (this.filieres[input].checked) {
        console.log(this.filieres[input].value);
      }
    }
  }
}
