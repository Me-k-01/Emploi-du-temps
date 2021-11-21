class Config {
  constructor(name) {
    this.include = name;
    this.load();
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
      this.import(presets);
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
  import({include, exclude}) {
    this.include = include;
    this.exclude = exclude;
  }

  getColor(title) {
    return "rgb(73, 121, 90)";
  }
  contains({titre, groupe}) {
    // console.log(titre, groupe);
    return (this.include[titre] === groupe || groupe === null) && ! this.exclude[titre];
  }

}
