class Config {
  constructor(name) {
    this.name = name;
    this.load();
  }
  add(title, group, color) {
    this.map[title] = group;
  }

  load() {
    this.map = localStorage.getItem(this.name) | presets[this.name];
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.map))
  };


  getColor(title) {
    return "rgb(73, 121, 90)";
  }
  contains(title, group) {
    return group === null || this.map[title] === group;
  }

}
